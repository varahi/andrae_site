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
            'database' => 'andraw_db1',
            'host' => '127.0.0.1',
            'password' => 'UmXkwjj4BXfFVc4G',
            'socket' => '',
            'username' => 'andraw_1'
        ];


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