<?php

namespace Ws\Wsnews\Tasks;

require_once __DIR__ . "/../CleverReachRestApi/rest_client.php";

require_once __DIR__ . "/../Pdo/pdo_mysql.php";
require_once "CreateNewsletter.php";
/**
 * class Importer
 *
 *
 */
class ExportCleverReach extends \TYPO3\CMS\Scheduler\Task\AbstractTask {

    /**
     * @var \GeorgRinger\News\Domain\Repository\NewsDefaultRepository $itemRepository
     */
    protected $itemRepository;

    /**
     * @var \TYPO3\CMS\Scheduler\Scheduler
     */
    protected $scheduler;

    protected $count = 0;
    protected $added = 0;
    protected $updated = 0;

    private $auth = [
        "client_id" => "190979",
        "login" => "nl2go_andrae@weise-stark.de",
        "password" => "Ww8H6KBZ"
    ];
    private $monthArray = [
        "none",
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "Spetember",
        "Oktober",
        "November",
        "Dezember"
    ];
    private $mailing = [];
    private $news = [];
    private $tileTemplate;
    private $newsletterTemplate;

    private $message;

    /**
     * @var \CR\tools\rest $rest
     */
    protected $rest;

    /**
     * @var \Ws\Wsnews\Pdo\dbConnection $pdo
     */
    protected $pdo;

    /**
     * @var \Ws\Wsnews\Tasks\CreateNewsletter $cr
     */
    protected $cr;



    /**
     * function execute
     *
     * @return bool
     * @throws \Exception
     */
    public function execute() {




        $this->rest = new \CR\tools\rest("https://rest.cleverreach.com/v2");
        $this->pdo = new \Ws\Wsnews\Pdo\dbConnection;
        $this->cr = new \Ws\Wsnews\Tasks\CreateNewsletter;



        //$this->itemRepository = $objectManager->get( \GeorgRinger\News\Domain\Repository\NewsDefaultRepository::class);
        /**
         * @var \TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager $persistenceManager
         */
        //$persistenceManager = $objectManager->get('TYPO3\\CMS\\Extbase\\Persistence\\Generic\\PersistenceManager');
        // $itemRepository->injectPersistenceManager($persistenceManager);
        // $persistenceManager->registerRepositoryClassName(\Websolutions\Wsvacancy\Domain\Repository\ItemRepository::class);





        $this->cleverReachLogin();

        $this->news = $this->selectNews();

        if(!empty($this->news)) {
            // Templates laden
            $this->getTemplates();

            // Templates mit News aus der DB befüllen
            $this->buildNewsletter();

            // erstellten Newsletter zu CleverReach übertragen
            $this->createNewsletter();
        }



        $this->message = "Success";
        $this->endTask();


        return true;
    }


    /**
     * Authenticate @ CleverReach
     *
     * @throws \Exception
     */
    private function cleverReachLogin()
    {
        try {
            $token = $this->rest->post('/login', $this->auth);
            $this->rest->setAuthMode("bearer", $token);
        }
        catch(\Exception $e) {
            $this->message = "Authenticfizierung fehlgeschlagen: {$e}";
        }

    }


    private function selectNews ()
    {

        $query = "SELECT uid, title, teaser FROM tx_news_domain_model_news WHERE notes = :timeString /*AND hidden = 0*/";

        // News DB nach aktivierten News für aktuelles Jahr und aktuellen Monat abfragen
        $timeString = date("Ym"); // Bsp.: 201807 -> Juli 2018
        $res = $this->pdo->select($query, [":timeString" => $timeString]);

        return $res;

    }

    private function getTemplates()
    {
        // Template für einzelne News Teaser
        $templatePath = __DIR__ . "/../../Resources/Private/Templates/CleverReach/";
        $this->tileTemplate = file_get_contents("{$templatePath}NewsContentTile.html");


        // Newsletter Template
        $this->newsletterTemplate = file_get_contents("{$templatePath}NewsletterTemplate.html");

    }

    private function buildNewsletter ()
    {

       $res = $this->news;

       if(empty($res)) {
           return false;
       }


        $contentElement = '';

        // Für Textonly ein eigenes Template erstellen, um die Variablen einfach einsetzen zu können.
        // strip_tags funktioniert nicht sonderlich gut. evtl andere Methode verwenden.
        $textOnly = "";


        for($i = 0; $i < count($res); $i++) {
            $srch = ['[%TITLE%]', '[%TEASER%]'];
            $rplc = [$res[$i]['title'], $res[$i]['teaser']];
            $contentElement .= str_replace($srch, $rplc, $this->tileTemplate)."\n";
        }


        $monat = $this->monthArray[date("n")];
        $jahr = date("Y");

        $srch = ['[%MONAT%]','[%JAHR%]','[%CONTENT%]'];
        $rplc = [$monat, $jahr, $contentElement];
        $newsletterTemplate = str_replace($srch, $rplc, $this->newsletterTemplate);


        // echo $newsletterTemplate;

        $subject = "Neuigkeiten im {$monat} {$jahr}";

        $textPrepare = str_replace("\n","", $newsletterTemplate);
        $textOnly = strip_tags($textPrepare);

        // Create Mailing
        $this->mailing = [
            "subject" => $subject,
            "content" => $newsletterTemplate,
            "textOnly" => $textOnly
        ];

        // Test Mailing bei CleverReach erstellen

    }

    private function createNewsletter ()
    {
        try{
            $this->cr->createMailing($this->mailing);
        }
        catch (\Exception $e) {
            echo "<pre>";
            print_r($e);
            echo "</pre>";
            die();

        }
    }

    protected function endTask()
    {
        $objectManager  = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance( 'TYPO3\CMS\Extbase\Object\ObjectManager' );

        // Output Task Typo3 BE
        $this->scheduler->log('Test' . get_class($this) ." - Message: {$this->message}", 0, 0);

        /**
         * @var \TYPO3\CMS\Extbase\Service\CacheService $cacheService
         */
        $cacheService = $objectManager->get('TYPO3\\CMS\\Extbase\\Service\\CacheService');
        $cacheService->clearPageCache(explode(',', 12));
    }


}
