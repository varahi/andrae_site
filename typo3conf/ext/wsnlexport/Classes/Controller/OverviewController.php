<?php
namespace WeiseStark\Wsnlexport\Controller;
/**
 * Created by PhpStorm.
 * User: markuselser
 * Date: 20.08.18
 * Time: 17:06
 */

use TYPO3\CMS\Core\Http\Request;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;

require_once __DIR__ . "/../CleverReachRestApi/rest_client.php";
require_once __DIR__ . "/../Pdo/pdo_mysql.php";
require_once __DIR__ . "/../Newsletter/ExportCleverReach.php";

class OverviewController extends ActionController
{


    /**
     * @var \WeiseStark\Wsnlexport\Newsletter\ExportCleverReach $exportNl
     */
    protected $exportNl;


    /**
     * OverviewController constructor.
     * @throws \Exception
     */
    public function __construct()
    {

        parent::__construct();

        $this->exportNl = new \WeiseStark\Wsnlexport\Newsletter\ExportCleverReach();

    }


    /**
     * @throws \Exception
     */
    public function indexAction() {

        // Prüfen, ob bereits ein Newsletter mit aktuellen News existiert.
        $checkMailings = ($this->exportNl->checkMailing()) ? 1 : 0;
        // aktivierte News Beiträge auslesen
        // @todo Hier eventl. aus Backend noch einen monat/Jahr Wert übergeben
        $news = $this->exportNl->getNews();

        if(empty($news)) {
            $news = [];
        }

        $newsArray = [
            'news' => $news,
            'mailingExist' => $checkMailings,
            'countNews' => count($news)
        ];

        // Array an BackendTemplate übergeben
        $this->view->assign('newsArray', $newsArray);

    }

    public function otherAction()
    {

        echo "<pre>";
        print_r($_POST);
        echo "</pre>";

        echo "<pre>";
        print_r($_GET);
        echo "</pre>";

        exit("MacExit - ".__FILE__." Z: ".__LINE__);


    }

    /**
     * @throws \Exception
     */
    public function  sendAction() {

        // Newsletter erstellen
        $result = $this->exportNl->execute();

        $this->view->assign('response', $result);

    }

    /**
     * @throws \Exception
     */
    public function getAction() {

        // Diese Option wurde aus dem BE Template entfernt
        $this->view->assign('response', $this->exportNl->getMailings());

    }


}