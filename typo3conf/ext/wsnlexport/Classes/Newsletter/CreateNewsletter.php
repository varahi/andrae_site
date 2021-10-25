<?php
/**
 * Created by PhpStorm.
 * User: markuselser
 * Date: 24.07.18
 * Time: 11:35
 */

namespace WeiseStark\Wsnlexport\Newsletter;

use TYPO3\CMS\Core\Cache\Exception;
use WeiseStark\Wsnlexport\Controller\AbstractController;

class CreateNewsletter extends AbstractController
{

    // CleverReach Rest API
    /**
     * @var \WeiseStark\Wsnlexport\tools\rest $rest
     */
    protected $rest;

    // @todo Daten aus BE auslesen
    //rivate $client_id = 190979;
    //private $login = "viarise";
    //private $password = "viarise2021";

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

    /**
     * @var string
     */
    private $token;

    //private $login = "nl2go_andrae@weise-stark.de";
    //private $password = "Ww8H6KBZ";

    /**
     * Initialize methods and form data
     *
     * @return
     */
    public function __construct()
    {
        $config = $this->getConfiguration();
        $this->client_id = $config['client_id'];
        $this->login = $config['login'];
        $this->password = $config['password'];
        $this->token = $config['token'];
    }

    /**
     * Authentifizierung bei CleverReach API
     * @throws \Exception
     */
    private function authenticate()
    {

        //\TYPO3\CMS\Core\Utility\DebugUtility::debug($this->token);

        $auth = [
            "client_id" => $this->client_id,
            "login" => $this->login,
            "password" => $this->password
        ];
        $token = $this->rest->post('/login', $auth);
        $this->rest->setAuthMode("bearer", $token);
    }

    /**
     * @param $mailing
     * @return array
     * @throws \Exception
     */
    public function createMailing($mailing)
    {
        $this->rest = new \WeiseStark\Wsnlexport\tools\rest("https://rest.cleverreach.com/v2");
        $this->authenticate();

        $datav3 = [
            "name"=> $mailing['subject'],
            "subject"=> $mailing['subject'],
            "sender_name"=> "ANDRÄ Consulting Group",
            "sender_email"=> "info@andrae.de",
            "content"=> [
                "type"=> "html/text",  // "html", "text" or "html/text"
                "html"=> $mailing['content'],
                "text"=> 'TextVersion Test'
            ],
            "receivers"=> [  // fill either a list of group ids or a filter id
                "groups"=> $this->getGroups(),
            ],
            "settings"=> [
                "editor"=> "wizard",  // "wizard", "freeform", "advanced", "plaintext"
                "open_tracking"=> true,  // track opening of emails
                "click_tracking"=> true,  // track clicks of emails
                //"link_tracking_url"=> "27.wayne.cleverreach.com",
                //"link_tracking_type"=> "google",  // "google", "intelliad", "crconnect"
                "unsubscribe_form_id"=> "192585",
                //"campaign_id"=> "52",
                //"category_id"=> "54"
            ]
        ];

        $data = [
            "mailingData" => [
                "name"=> $mailing['subject'],
                "type" => "html/text",
                "subject"=> $mailing['subject'],
                "sender_name"=> "ANDRÄ Consulting Group",
                "sender_email"=> "info@andrae.de",
                "group_id" => $this->getGroups(),
                "html" => $mailing['content'],
                "text" => 'this is the Text only'
            ]
        ];

        try {
            $setMailing = $this->rest->post('/mailings.json', json_encode($data));
        } catch (\Exception $e) {
            return ['status' => "Failed",'error'=> $e];
        }
        return ['status' => "OK",'error'=> ''];
    }

    /**
     * Aktive Gruppen auslesen, Newsletter werden an alle aktiven Grupen versendet
     * @todo    wenn später benötigt, Ergebnis über Filter eingrenzen, wenn unterschiedliche Newsletter
     *          an unterschiedliche Gruppen gesendet werden sollen.
     * @return array
     * @throws \Exception
     */
    private function getGroups()
    {
        $allGroups = $this->rest->get("/groups.json");
        $groups = [];
        foreach ($allGroups as $key => $data) {
            if (!$data->isLocked) {
                $groups[] = $data->id;
            }
        }

        return $groups;
    }

    /**
     * Temporäre Funktion zum testen
     * @return array
     * @throws \Exception
     */
    public function getGroupIds()
    {
        return $this->getGroups();
    }

    /**
     * @throws \Exception
     */
    public function getMailings()
    {
        $this->rest = new \WeiseStark\Wsnlexport\tools\rest("https://rest.cleverreach.com/v2");
        $this->authenticate();

        return $this->rest->get('/mailings.json?state=draft');
    }
}
