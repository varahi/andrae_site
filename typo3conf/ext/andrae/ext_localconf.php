<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

// Add page TSconfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:andrae/Configuration/TsConfig/Page/config.t3s">');

// Add user TSConfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:andrae/Configuration/TsConfig/User/config.t3s">');



\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    'Andrae.' . $_EXTKEY,
    'Andrae',
    array(
        'Andrae' => 'contact, contactConfirm, newsletter, startTiles',
        'Xml' => 'listNews',
        
    ),
    // non-cacheable actions
    array(
        'Andrae' => 'contact, contactConfirm, newsletter, startTiles',
        'Xml' => 'listNews',
    )
);
