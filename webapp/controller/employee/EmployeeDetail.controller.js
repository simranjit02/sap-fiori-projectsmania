sap.ui.define(
  ["sap/ui/core/mvc/Controller", "prjmania/projectmania/model/models"],
  (Controller, Models) => {
    return Controller.extend(
      "prjmania.projectmania.controller.employee.EmployeeList",
      {
        onInit: function () {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter
            .getRoute("employeeDetail")
            .attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function (oEvent) {
          var sEmployeeId = oEvent.getParameter("arguments").employeeId;
          console.log("Received employeeId:", sEmployeeId);

          var sEmployeeModel = Models.createJSONModel();
          console.log("sEmployeeModel", sEmployeeModel);
          // Find the specific employee
          var oEmployee = aData.find((emp) => emp.EmployeeID == sEmployeeId);
          console.log("Employee object:", oEmployee);

          // (Optional) Set that employee data to a local model or bind it to view
          var oDetailModel = new sap.ui.model.json.JSONModel(oEmployee);
          this.getView().setModel(oDetailModel, "selectedEmployee");
        },
      }
    );
  }
);
