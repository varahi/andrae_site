<?php
namespace Ws\Wsnews\Command;

use TYPO3\CMS\Core\Utility\DebugUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\PathUtility;

use TYPO3\CMS\Extbase\Configuration\BackendConfigurationManager;
use TYPO3\CMS\Extbase\Mvc\Controller\CommandController;

/**
 *
 * Base class for Certification Class
 *
 */
abstract class AbstractCommandController extends CommandController
{

    /**
     * @var \TYPO3\CMS\Extbase\Configuration\BackendConfigurationManager
     * @inject
     */
    protected $configurationManager;

    /**
     * @var array
     */
    protected $configuration = array();

    /**
     * persistenceManager
     *
     * @var \TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager
     * @inject
     */
    protected $persistenceManager;

    /**
     * @var \TYPO3\CMS\Core\Resource\ResourceStorage
     */
    protected $storage = null;

    /**
     * __construct
     */
    public function __construct()
    {
        // Int ext conf configuration
        $this->getConfiguration();
    }

    /**
     * Build config array (get from $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['wsnews'])
     * if empty then set default values for configuration
     *
     * @return array Configuration
     */
    protected function getConfiguration()
    {
        if (empty($this->configuration)) {
            $configuration = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['wsnews'];
            if (is_string($configuration)) {
                $configuration = unserialize($configuration);
            }
            // set default values if no global conf found
            // ToDo set config values
            if (empty($configuration)) {
                $configuration = array(
                    'enableDevLog' => false,
                    'urlPath' => 'https://105226.mainfo.net/aktuelles.xml',
                );
            }
            $this->configuration = $configuration;
        }
        return $this->configuration;
    }
}