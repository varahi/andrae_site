<?php
/**
 * Created by PhpStorm.
 * User: markuselser
 * Date: 24.07.18
 * Time: 11:35
 */

namespace Ws\Wsnews\Tasks;


use TYPO3\CMS\Core\Cache\Exception;

class CreateNewsletter
{

    // CleverReach Rest API
    protected $rest;


    private $client_id = 190979;
    private $login = "nl2go_andrae@weise-stark.de";
    private $password = "Ww8H6KBZ";

    private $token;

    /**
     * CreateNewsletter constructor.
     * @throws \Exception
     */
    public function __construct()
    {
        $this->rest = new \CR\tools\rest("https://rest.cleverreach.com/v2");
        if(!$this->rest) {
            die("REST API FEHLER - konnte nicht initialisiert werden.");
        }

        $this->authenticate();

    }

    /**
     * Authentifizierung bei CleverReach API
     * @throws \Exception
     */
    private function authenticate()
    {
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
     * @throws \Exception
     */
    public function createMailing($mailing)
    {


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

        }
        catch (\Exception $e) {
            echo "<pre>";
            print_r($e);
            echo "</pre>";

            exit("MacExit - ".__FILE__." Z: ".__LINE__);
        }

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
            if(!$data->isLocked) {
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
}