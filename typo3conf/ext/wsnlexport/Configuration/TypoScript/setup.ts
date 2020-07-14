
# Module configuration
module.tx_wsnlexport_tools_wsnlexportwscrexport {
  persistence {
    storagePid = {$module.tx_wsnlexport_wscrexport.persistence.storagePid}
  }
  view {
    templateRootPaths.0 = EXT:wsnlexport/Resources/Private/Backend/Templates/
    templateRootPaths.1 = {$module.tx_wsnlexport_wscrexport.view.templateRootPath}
    partialRootPaths.0 = EXT:wsnlexport/Resources/Private/Backend/Partials/
    partialRootPaths.1 = {$module.tx_wsnlexport_wscrexport.view.partialRootPath}
    layoutRootPaths.0 = EXT:wsnlexport/Resources/Private/Backend/Layouts/
    layoutRootPaths.1 = {$module.tx_wsnlexport_wscrexport.view.layoutRootPath}
  }
}
