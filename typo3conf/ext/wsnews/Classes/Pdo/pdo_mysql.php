<?php
namespace Ws\Wsnews\Pdo;

class dbConnection {

    protected $pdo;

    public function __construct()
    {
        $this->pdo = $this->openDB();
        if(!$this->pdo) {
            exit("MacExit - ".__FILE__." Z: ".__LINE__);
        }
    }

    private function openDB()
    {
        // Daten aus Config holen
        //$conf = include '../../../../LocalConfiguration.php'; // TTL Daten ????
        $dbData = [

            'database' => 'typo3_dev',
            'host' => '172.17.0.1',
            'password' => 'dev',
            'socket' => '',
            'username' => 'root'
        ];

        // ToDo: move connection to TYPO3 env.
        //$database = $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['dbname'];
        //$host = $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['host'];
        //$conUser = $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['user'];
        //$conPw = $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['password'];
        //$server = "mysql:dbname={$database};host={$host};port=3306;";

        $server = "mysql:dbname={$dbData['database']};host={$dbData['host']};port=3306;";
        $conUser = $dbData['username']; //"meinpv_1_w";
        $conPw = $dbData['password']; //"zZu6iJh243WCEBHY";


        try{
            $pdo = new \PDO($server, $conUser, $conPw, [\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'" ]);
        }
        catch(\PDOException $e) {
            echo "Verbindung nicht möglich! {$e->getMessage()}";
            die();
        }

        return $pdo;

    }

    public function getPdo()
    {
        return $this->pdo;
    }


    public function select($query, $params)
    {

        $stmt = $this->pdo->prepare($query);
        $stmt ->execute($params);

        // Error Handling
        if($stmt->errorInfo()[0] != "00000") {
            echo "<pre>";
            print_r($stmt->errorInfo());
            echo "</pre>";
        }


        if($stmt->rowCount() > 1) {
            
            return $stmt->fetchAll(\PDO::FETCH_ASSOC);
        }
        
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }


}