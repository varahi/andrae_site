<?php
/**
 * Created by PhpStorm.
 * User: markuselser
 * Date: 30.05.18
 * Time: 11:03
 */

namespace Ws\Wsnews\Tasks;

class DirtyImporter {


    protected $pdo;

    public function __construct()
    {
        $this->pdo = $this->openDB();
        if(!$this->pdo) {
            exit("MacExit - ".__FILE__." Z: ".__LINE__);
        }
    }


    /**
     * Verbindung zur Andrä Datenbank herstellen
     * diese Datei muss nach dem life schalten angepßt werden,
     * damit die richtige DB befüllt wird.
     *
     * @return \PDO
     */
    private function openDB()
    {
        // Daten aus Config holen
        //$conf = include '../../../../LocalConfiguration.php'; // TTL Daten ????

        /*
        $dbData = [
            'database' => 'typo3_dev',
            'host' => '172.17.0.1',
            'password' => 'dev',
            'socket' => '',
            'username' => 'root'
        ];
        */

        //$server = "mysql:dbname={$dbData['database']};host={$dbData['host']};port=3306;";
        //$conUser = $dbData['username']; //"meinpv_1_w";
        //$conPw = $dbData['password']; //"zZu6iJh243WCEBHY";

        // Get data connections via TYPO3_CONF_VARS
        $database = $GLOBALS['TYPO3_CONF_VARS']['DB']['database'];
        $host = $GLOBALS['TYPO3_CONF_VARS']['DB']['host'];
        $server = "mysql:dbname={$database};host={$host};port=3306;";
        $conUser = $GLOBALS['TYPO3_CONF_VARS']['DB']['username'];
        $conPw = $GLOBALS['TYPO3_CONF_VARS']['DB']['password'];

        try{
            $pdo = new \PDO($server, $conUser, $conPw, [\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'" ]);
        }
        catch(\PDOException $e) {
            echo "Verbindung nicht möglich! {$e->getMessage()}";
            die();
        }

        return $pdo;

    }

    public function writeXmlArray($xmlArray) {


        if(is_array($xmlArray)) {

            for($i = 0; $i < count($xmlArray); $i++) {
                $newsArticle = $xmlArray[$i];

                if(isset($newsArticle['beitragsid']) && !empty($newsArticle['beitragsid'])) {

                    if($this->checkBeitrag($newsArticle['beitragsid'])) {

                        // asugeblendet
                        $l10n_diffsource = 'a:26:{s:5:"title";N;s:9:"istopnews";N;s:4:"type";N;s:16:"sys_language_uid";N;s:6:"hidden";N;s:6:"teaser";N;s:6:"author";N;s:12:"author_email";N;s:8:"datetime";N;s:7:"archive";N;s:8:"bodytext";N;s:9:"starttime";N;s:7:"endtime";N;s:8:"fe_group";N;s:8:"editlock";N;s:10:"categories";N;s:4:"tags";N;s:9:"fal_media";N;s:17:"fal_related_files";N;s:13:"related_links";N;s:7:"related";N;s:12:"related_from";N;s:8:"keywords";N;s:11:"description";N;s:17:"alternative_title";N;s:12:"path_segment";N;}';
                        $author = '';
                        $author_email = '';
                        // Kategorie Backend
                        $pid = 12;
                        // Import Date
                        $crdate = time();
                        // Backend Schedule User ID
                        $cruser_id = 6;

                        $fe_group = '';

                        // Datum XML pub_date

                        $tstamp = (isset($newsArticle['pubdate'])) ? strtotime($newsArticle['pubdate']) : time();

                        $title = strip_tags($newsArticle['titel']);

                        $tempText = str_replace("\r","", $newsArticle['inhalt']);
                        $bodytextBr = str_replace("\n","<br />", $tempText);
                        $bodytext = html_entity_decode($bodytextBr);

                        $teaserTemp = wordwrap(strip_tags($bodytext, ''), 180, "[XX]");
                        $teaserArr = explode("[XX]", $teaserTemp);
                        $teaser = $teaserArr[0]. " ...";

                        $datetime = $tstamp;
                        $categories = 1;
                        $hidden = 1;
                        $news_import_data = $newsArticle['beitragsid'];
                        // Date Note zum identifizieren von bestimmten News Beiträgen.
                        // wird für den Newsletter Versand benötigt und an CleverReach übergeben.
                        //
                        $news_note = date("Ym");


                        $pdoArray = [
                            ':pid' => $pid,
                            ':l10n_diffsource' => $l10n_diffsource,
                            ':fe_group' => $fe_group,
                            ':author' => $author,
                            ':author_email' => $author_email,
                            ':tstamp' => $tstamp,
                            ':crdate' => $crdate,
                            ':cruser_id' => $cruser_id,
                            ':title' => html_entity_decode($title),
                            ':teaser' => $teaser,
                            ':bodytext' => $bodytext,
                            ':datetime' => $datetime,
                            ':categories' => $categories,
                            ':hidden' => $hidden,
                            ':news_import_data' => $news_import_data,
                            ":notes" => $news_note
                        ];


                        $pid = $this->writeDb($pdoArray);
                        if(empty($pid)) {
                            $ds = $i + 1;
                            echo "<h1>Fehler beim import (DS {$ds})</h1><p>XML BeitragId: {$news_import_data}</p>";
                            die();
                        }
                    }


                }

            }

            return true;

        }
        return false;
    }

    /**
     * Datensatz in News DB schreiben
     *
     * @param array $pdoArr
     * @return int | bool
     */
    private function writeDb($pdoArr = []) {

        if(!empty($pdoArr)) {


            $query = "INSERT INTO tx_news_domain_model_news (pid, l10n_diffsource, fe_group, author, author_email, tstamp, crdate, cruser_id, title, teaser, bodytext, datetime, categories, hidden, notes, news_import_data) VALUES (:pid, :l10n_diffsource, :fe_group, :author, :author_email, :tstamp, :crdate, :cruser_id, :title, :teaser, :bodytext, :datetime, :categories, :hidden, :notes, :news_import_data)";

            $stmt = $this->pdo->prepare($query);
            $stmt -> execute($pdoArr);
            $pid = $this->pdo->lastInsertId();

            if(empty($pid)) {

                echo "<h1>Fehler in INSERT Query</h1><pre>";
                print_r($stmt->errorInfo());
                echo "</pre>";
                exit("MacExit - ".__FILE__." Z: ".__LINE__);
                return false;

            }
            // Category Datensatz erstellen
            $this->addCategory($pid);
            return $pid;
        }

        return false;

    }

    private function addCategory($pid) {

        if(is_numeric($pid)) {

            $query = "INSERT INTO sys_category_record_mm (uid_local, uid_foreign, tablenames, fieldname, sorting, sorting_foreign) VALUES (2, :uid_foreign, 'tx_news_domain_model_news', 'categories', 0, 1)";

            $stmt = $this->pdo->prepare($query);
            $stmt -> execute(['uid_foreign' => $pid]);

            if($stmt->rowCount() < 1) {
                echo "<pre>";
                print_r($stmt->errorInfo());
                echo "</pre>";
                exit("MacExit - ".__FILE__." Z: ".__LINE__);
            }

        }
        else {

            echo "<pre>";
            var_dump($pid, true);
            echo "</pre>";
            exit("MacExit - ".__FILE__." Z: ".__LINE__);
        }

    }

    private function checkBeitrag($xmlBeitragId) {

        $query = "SELECT pid FROM tx_news_domain_model_news WHERE news_import_data = :xmlBeitragId";
        $stmt = $this->pdo->prepare($query);
        $stmt -> execute([':xmlBeitragId' => $xmlBeitragId]);

        return ($stmt->rowCount() > 0) ? false : true;
    }

}