<?php
namespace Andrae\Andrae\Controller;

use \TYPO3\CMS\Extbase\Mvc\Controller\ActionController;

/**
 * AndraeController
 */
class XmlController extends ActionController
{

    /**
     * @var \GeorgRinger\News\Domain\Repository\NewsRepository
     */
    protected $newsRepository;

    /**
     * Inject a news repository to enable DI
     *
     * @param \GeorgRinger\News\Domain\Repository\NewsRepository $newsRepository
     */
    public function injectNewsRepository(\GeorgRinger\News\Domain\Repository\NewsRepository $newsRepository)
    {
        $this->newsRepository = $newsRepository;
    }

    public function initializeListAction()
    {
        $this->request->setFormat('xml');
    }

    public function listNewsAction()
    {
        $this->request->setFormat('xml');
        // http://domain/index.php?id=1&type=133798
        $news = $this->newsRepository->findAll()->getQuery()->setLimit(999)->execute();
        $this->view->assign('news', $news);
        //\TYPO3\CMS\Core\Utility\DebugUtility::debug($news);
    }
}
