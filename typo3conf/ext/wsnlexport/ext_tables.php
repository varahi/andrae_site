<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function ($extKey) {
        if (TYPO3_MODE === 'BE') {
            \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule(
                'WeiseStark.Wsnlexport',
                'web', // Make module a submodule of 'tools'
                'wscrexport', // Submodule key
                '', // Position
                [
                    'Overview' => 'index,send,get,other'
                ],
                [
                    'access' => 'user,group',
                    'icon'   => 'EXT:' . $extKey . '/Resources/Public/Icons/user_mod_wscrexport.svg',
                    'labels' => 'LLL:EXT:' . $extKey . '/Resources/Private/Language/locallang_wscrexport.xlf',
                ]
            );
        }

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript', 'Newsletter Export to CleverReach');
    },
    $_EXTKEY
);
