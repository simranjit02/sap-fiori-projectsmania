sap.ui.define(["sap/ui/core/mvc/Controller"], (BaseController) => {
  "use strict";

  return BaseController.extend("prjmania.projectmania.controller.App", {
    onInit() {
      sap.ui.getCore().applyTheme("sap_fiori_3_dark");
    },
  });
});
