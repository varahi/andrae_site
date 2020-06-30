<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}
// XML Import
require_once(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY) . '/Classes/Tasks/Importer.php');
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['scheduler']['tasks'][\Ws\Wsnews\Tasks\Importer::class] = array(
    'extension'        => $_EXTKEY,
    'title'            => 'Import XML for News',
    'description'      => 'XML Import for News'
);

// @todo Export to CleverReach
require_once(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY) . '/Classes/Tasks/ExportCleverReach.php');
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['scheduler']['tasks'][\Ws\Wsnews\Tasks\ExportCleverReach::class] = array(
    'extension'        => $_EXTKEY,
    'title'            => 'Export CleverReach',
    'description'      => 'Vorbereitung für das Senden der ausgewählten Daten an CleverReach API (noch nicht implememntiert).'
);


//if (TYPO3_MODE === 'BE') {
//    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['extbase']['commandControllers']['Ws-News'] =
//        \Ws\Wsnews\Command\ImportCommandController::class;
//}