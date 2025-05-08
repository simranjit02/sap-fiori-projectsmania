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
          var sEmployeeId = parseInt(
            oEvent.getParameter("arguments").employeeId
          );

          // Load the model with employee data
          var oEmployeeModel = Models.createJSONModel();
          this.getView().setModel(oEmployeeModel, "semployee");
          console.log("oEmployeeModel", oEmployeeModel);

          // Ensure data is loaded before processing
          var oModel = this.getView().getModel("semployee");
          var oData = oModel.getData();
          console.log("Full Model oModel:", oModel);
          var aEmployees = oData && oData.employees ? oData.employees : [];

          console.log("Loaded Employees:", aEmployees);

          var oEmployee = aEmployees.find(function (emp) {
            return emp.EmployeeID === sEmployeeId;
          });

          if (oEmployee) {
            var oDetailModel = new sap.ui.model.json.JSONModel(oEmployee);
            this.getView().setModel(oDetailModel, "selectedEmployee");
            console.log("Employee found:", oEmployee);
          } else {
            console.error("Employee not found for ID:", sEmployeeId);
          }
        },
      }
    );
  }
);
