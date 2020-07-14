<?php
namespace WeiseStark\Wsnlexport\ViewHelpers;

use TYPO3\CMS\Core\Page\PageRenderer;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

class BackendViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

    public function render($array) {

        exit("MacExit - ".__FILE__." Z: ".__LINE__);
        echo "<pre>";
        print_r($array);
        echo "</pre>";

        return;

    }

}