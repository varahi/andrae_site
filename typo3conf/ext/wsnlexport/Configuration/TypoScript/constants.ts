
module.tx_wsnlexport_wscrexport {
  view {
    # cat=module.tx_wsnlexport_wscrexport/file; type=string; label=Path to template root (BE)
    templateRootPath = EXT:wsnlexport/Resources/Private/Backend/Templates/
    # cat=module.tx_wsnlexport_wscrexport/file; type=string; label=Path to template partials (BE)
    partialRootPath = EXT:wsnlexport/Resources/Private/Backend/Partials/
    # cat=module.tx_wsnlexport_wscrexport/file; type=string; label=Path to template layouts (BE)
    layoutRootPath = EXT:wsnlexport/Resources/Private/Backend/Layouts/
  }
  persistence {
    # cat=module.tx_wsnlexport_wscrexport//a; type=string; label=Default storage PID
    storagePid =
  }
}
