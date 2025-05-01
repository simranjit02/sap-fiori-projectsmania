sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("prjmania.projectmania.controller.View1", {
      onInit() {
        let tilesModel = new JSONModel("../model/tiles.json");
        this.getView().setModel(tilesModel, "tiles");
      },
    });
  }
);
