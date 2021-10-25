<?php
namespace WeiseStark\Wsnlexport\Controller;

use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;

/**
 * AbstractController
 */
abstract class AbstractController extends ActionController
{

    /**
     * Build config array (get from $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['fritschproducts'])
     * if empty then set default values for configuration
     *
     * @return array Configuration
     */
    protected function getConfiguration()
    {
        if (empty($this->configuration)) {
            $configuration = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['wsnlexport'];
            if (is_string($configuration)) {
                $configuration = unserialize($configuration);
            }
            // set default values if no global conf found
            if (empty($configuration)) {
                $configuration = array(
                    'client_id' => 0,
                    'login' => '',
                    'password' => '',
                    'token' => ''
                );
            }
            $this->configuration = $configuration;
        }
        return $this->configuration;
    }
}
