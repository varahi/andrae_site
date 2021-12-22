<?php
namespace Andrae\Andrae\Tests\Unit\Controller;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2017
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
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
 * Test case for class Andrae\Andrae\Controller\AndraeController.
 *
 */
class AndraeControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{

    /**
     * @var \Andrae\Andrae\Controller\AndraeController
     */
    protected $subject = null;

    public function setUp()
    {
        $this->subject = $this->getMock('Andrae\\Andrae\\Controller\\AndraeController', array('redirect', 'forward', 'addFlashMessage'), array(), '', false);
    }

    public function tearDown()
    {
        unset($this->subject);
    }

    /**
     * @test
     */
    public function listActionFetchesAllAndraesFromRepositoryAndAssignsThemToView()
    {
        $allAndraes = $this->getMock('TYPO3\\CMS\\Extbase\\Persistence\\ObjectStorage', array(), array(), '', false);

        $andraeRepository = $this->getMock('Andrae\\Andrae\\Domain\\Repository\\AndraeRepository', array('findAll'), array(), '', false);
        $andraeRepository->expects($this->once())->method('findAll')->will($this->returnValue($allAndraes));
        $this->inject($this->subject, 'andraeRepository', $andraeRepository);

        $view = $this->getMock('TYPO3\\CMS\\Extbase\\Mvc\\View\\ViewInterface');
        $view->expects($this->once())->method('assign')->with('andraes', $allAndraes);
        $this->inject($this->subject, 'view', $view);

        $this->subject->listAction();
    }
}
