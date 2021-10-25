<?php

namespace WeiseStark\Wsnlexport\Newsletter;

use WeiseStark\Wsnlexport\Controller\AbstractController;

require_once __DIR__ . "/../CleverReachRestApi/rest_client.php";
require_once __DIR__ . "/../Pdo/pdo_mysql.php";
require_once "CreateNewsletter.php";
/**
 * class Importer
 *
 *
 */
class ExportCleverReach extends AbstractController
{
    protected $count = 0;
    protected $added = 0;
    protected $updated = 0;

    /**
     * @var string
     */
    private $client_id;

    /**
     * @var string
     */
    private $login;

    /**
     * @var string
     */
    private $password;

    //private $auth = [
    //"client_id" => "190979",
    //"login" => "viarise",
    //"password" => "viarise2021"
    //"login" => "nl2go_andrae@weise-stark.de",
    //"password" => "Ww8H6KBZ"
    //];
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
        "September",
        "Oktober",
        "November",
        "Dezember"
    ];
    private $mailing = [];
    private $news = [];
    private $tileTemplate;
    private $newsletterTemplate;

    private $message;
    private $error = [];

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
     * ExportCleverReach constructor.
     * @throws \Exception
     */
    public function __construct()
    {
        $this->rest = new \WeiseStark\Wsnlexport\tools\rest("https://rest.cleverreach.com/v2");
        $this->pdo = new \WeiseStark\Wsnlexport\Pdo\dbConnection;
        $this->cr = new \WeiseStark\Wsnlexport\Newsletter\CreateNewsletter;

        $config = $this->getConfiguration();
        $this->client_id = $config['client_id'];
        $this->login = $config['login'];
        $this->password = $config['password'];
        $this->token = $config['token'];
    }


    /**
     * @return array
     * @throws \Exception
     */
    public function execute()
    {

        //$this->cleverReachLogin();

        $this->news = $this->selectNews();

        if (!empty($this->news)) {
            // Templates laden
            $this->getTemplates();

            if (!empty($this->error)) {
                echo "<pre>";
                print_r($this->error);
                echo "</pre>";
                exit("MacExit - ".__FILE__." Z: ".__LINE__);
            }

            // Templates mit News aus der DB befüllen
            $this->buildNewsletter();

            // erstellten Newsletter zu CleverReach übertragen
            $this->createNewsletter();
        }

        $this->message = (empty($this->error)) ? 'OK' : 'Failed';

        $result = [
            'message' => $this->message,
            'newsletter' => $this->mailing['content'],
            'error' => $this->error
        ];

        return $result;
    }

    public function getNews($timeString = null)
    {
        return $this->selectNews($timeString);
    }


    /**
     * Authenticate @ CleverReach
     *
     * @throws \Exception
     */
    private function cleverReachLogin()
    {
        $auth = [
            "client_id" => $this->client_id,
            "login" => $this->login,
            "password" => $this->password
        ];
        try {
            $token = $this->rest->post('/login', $auth);
            $this->rest->setAuthMode("bearer", $token);
        } catch (\Exception $e) {
            $this->message = "Authentifizierung fehlgeschlagen: {$e}";
        }
    }


    private function selectNews($timeString = null)
    {
        $query = "SELECT uid, title, teaser, bodytext FROM tx_news_domain_model_news WHERE notes = :timeString";
        //$timeString = "201809";

        // News DB nach aktivierten News für aktuelles Jahr und aktuellen Monat abfragen
        $timeString = (!$timeString) ? date("Ym") : $timeString; // Bsp.: 201807 -> Juli 2018
        $res = $this->pdo->select($query, [":timeString" => $timeString]);

        return $res;
    }

    private function getTemplates()
    {
        // Template für einzelne News Teaser
        $templatePath = __DIR__ . "/../../Resources/Private/Templates/CleverReach/";

        if (file_exists("{$templatePath}NewsContentTile.html")) {
            $this->tileTemplate = file_get_contents("{$templatePath}NewsContentTile.html");
        } else {
            $this->error[] = "TileTemplate nicht gefunden ({$templatePath}NewsContentTile.html)";
            return false;
        }

        // Newsletter Template
        if (file_exists("{$templatePath}NewsletterTemplate.html")) {
            $this->newsletterTemplate = file_get_contents("{$templatePath}NewsletterTemplate.html");
        } else {
            $this->error[] = "NewsletterTemplate nicht gefunden ({$templatePath}NewsletterTemplate.html)";
            return false;
        }

        return true;
    }

    private function buildNewsletter()
    {
        $res = $this->news;

        if (empty($res)) {
            $this->error[] = "Keine aktiven News-Beiträge vorhanden.";
            return false;
        }


        $contentElement = '';

        $teaser = true; // false => Es kann der komplette Text in der E-Mail darfestellt werden.

        // Für Textonly ein eigenes Template erstellen, um die Variablen einfach einsetzen zu können.
        // strip_tags funktioniert nicht sonderlich gut. evtl andere Methode verwenden.
        $textOnly = "";

        $this->count = count($res);

        $srch = ['[%TITLE%]', '[%TEASER%]'];

        for ($i = 0; $i < count($res); $i++) {
            $newText = '';
            if (!$teaser) {
                // Text neu formatieren, Standard <br> entfernen, um die Darstellung im Newsletter
                // zu optimieren ...

                $origText = $res[$i]['bodytext'];
                $brArray = explode("<br />", $origText);

                for ($nt = 0; $nt < count($brArray); $nt++) {
                    if (!empty($brArray[$nt])) {
                        $newText .= $brArray[$nt];
                    } else {
                        $newText .= "<br />";
                    }
                }
                $rplc = [$res[$i]['title'], $newText];
            } else {
                $newstUebersichtLink = "https://www.andrae.de/news-referenzen/neuigkeiten-uebersicht/";
                $teaserDetailLink = "https://andrae.de/news-referenzen/news-detail/?tx_news_pi1%5Bnews%5D={$res[$i]['uid']}";

                $teaserText = $res[$i]['teaser'] . '<a style="color: rgb(204,51,51); text-decoration:none; font-size: 12pt; font-weight: bold" href="' . $teaserDetailLink . '"> mehr</a>';

                $rplc = [$res[$i]['title'], $teaserText];
            }

            $contentElement .= str_replace($srch, $rplc, $this->tileTemplate)."\n";
        }



        $monat = $this->monthArray[date("n")];
        // manipuliert
        //$monat = $this->monthArray[9];

        $jahr = date("Y");

        $srch = ['[%MONAT%]','[%JAHR%]','[%CONTENT%]'];
        $rplc = [$monat, $jahr, $contentElement];
        $newsletterTemplate = str_replace($srch, $rplc, $this->newsletterTemplate);


        // echo $newsletterTemplate;

        $subject = "Neuigkeiten im {$monat} {$jahr}";

        $textPrepare = str_replace("\n", "", $newsletterTemplate);
        $textOnly = strip_tags($textPrepare);

        // Create Mailing
        $this->mailing = [
            "subject" => $subject,
            "content" => $newsletterTemplate,
            "textOnly" => $textOnly
        ];

        // Test Mailing bei CleverReach erstellen
    }

    private function createNewsletter()
    {
        if (empty($this->mailing)) {
            $this->error[] = "Keine Mailing vorhanden";
            return false;
        }

        try {
            $this->cr->createMailing($this->mailing);
        } catch (\Exception $e) {
            $this->error[] = $e;
        }
    }

    /**
     * @throws \Exception
     */
    public function getMailings()
    {
        $getMailings = $this->cr->getMailings();


        return $getMailings;
    }

    /**
     * Prüfen ob für aktuellen Monat bereits ein Mailing existiert
     *
     * @return bool
     * @throws \Exception
     */
    public function checkMailing()
    {
        $monat = $this->monthArray[date("n")];
        $jahr = date("Y");
        $subject = "Neuigkeiten im {$monat} {$jahr}";

        $mailingObject = $this->cr->getMailings();

        foreach ($mailingObject->draft as $arr) {
            if ($arr->subject == $subject) {
                return true;
            }
        }
        return false;
    }
}
