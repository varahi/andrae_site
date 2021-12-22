<?php
namespace Andrae\Andrae\Controller;

/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2017
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * AndraeController
 */
class AndraeController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{

    /**
     * andraeRepository
     *
     * @var \Andrae\Andrae\Domain\Repository\AndraeRepository
     * @inject
     */
    protected $andraeRepository = null;

    /**
     * action contact
     *
     * @return void
     */
    public function contactAction()
    {
    }

    /**
     * action contactConfirm
     *
     * @return void
     */
    public function contactConfirmAction()
    {
        $formData = $this->request->getArguments();
        $emailView = $this->objectManager->get('TYPO3\\CMS\\Fluid\\View\\StandaloneView');
        $templateName = 'typo3conf/ext/andrae/Resources/Private/Templates/Email/contact.html';
        $extbaseFrameworkConfiguration = $this->configurationManager->getConfiguration(\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::CONFIGURATION_TYPE_FRAMEWORK);
        $templateRootPath = \TYPO3\CMS\Core\Utility\GeneralUtility::getFileAbsFileName($extbaseFrameworkConfiguration['view']['templateRootPath']);
        $templatePathAndFilename = $templateRootPath . $templateName;

        $emailView->setTemplatePathAndFilename($templatePathAndFilename);
        $emailView->assign('form', $formData);
        $emailBody = $emailView->render();

        $mail = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Mail\\MailMessage');
        $mail->setSubject('Eigene Internetseite - Kontaktformular');
        $mail->setFrom(array($formData['email']));
        $mail->setTo(array('m.elser@weiseundstark.de'));
        $mail->setBody('', 'text/html');
        $mail->addPart($emailBody, 'text/html');
        $mail->send();
    }

    /**
     * action newsletter
     *
     * @return void
     */
    public function newsletterAction()
    {
    }

    /**
     * action startTiles
     *
     * @return void
     */
    public function startTilesAction()
    {
    }
}
