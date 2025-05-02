sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("prjmania.projectmania.controller.View1", {
    onInit() {},
    onNavBack() {
      window.history.go(-1);
    },
  });
});
