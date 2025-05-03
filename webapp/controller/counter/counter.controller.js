sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("prjmania.projectmania.controller.counter", {
      onInit() {
        var oModel = new JSONModel({
          count: 1,
        });
        this.getView().setModel(oModel, "currentCount");
      },
      onNavBack() {
        window.history.go(-1);
      },
      onIncrement() {
        var oModel = this.getView().getModel("currentCount");
        var keyProp = oModel.getProperty("/count");
        oModel.setProperty("/count", keyProp + 1);
      },
      onDecrement() {
        var oModel = this.getView().getModel("currentCount");
        var keyProp = oModel.getProperty("/count");
        if (keyProp > 1) {
          oModel.setProperty("/count", keyProp - 1);
        }
      },
    });
  }
);
