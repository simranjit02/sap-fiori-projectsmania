sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
  function (JSONModel, Device) {
    "use strict";

    return {
      /**
       * Provides runtime information for the device the UI5 app is running on as a JSONModel.
       * @returns {sap.ui.model.json.JSONModel} The device model.
       */
      createDeviceModel: function () {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },
      createJSONModel: function () {
        var oEmployeeModel = new JSONModel();
        oEmployeeModel.loadData("model/employees.json");
        oEmployeeModel.attachRequestCompleted(function () {
          console.log("Employee data loaded successfully.");
        });
        return oEmployeeModel;
      },
    };
  }
);
