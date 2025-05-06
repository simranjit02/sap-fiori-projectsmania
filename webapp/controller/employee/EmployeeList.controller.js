sap.ui.define(
  ["sap/ui/core/mvc/Controller", "prjmania/projectmania/model/models"],
  (Controller, Models) => {
    return Controller.extend(
      "prjmania.projectmania.controller.employee.EmployeeList",
      {
        onInit() {
          var oEmployeeModel = Models.createJSONModel();
          this.getView().setModel(oEmployeeModel, "employee");
        },
        onUpdateFinished: function (oEvent) {
          console.log("List loaded with items:", oEvent.getParameter("total"));
        },
        empDetail: function (oEvent) {
          var oItem = oEvent.getSource();
          var oCtx = oItem.getBindingContext("employee");
          var sEmployeeID = oCtx.getProperty("EmployeeID");
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("employeeDetail", {
            employeeId: sEmployeeID,
          });
        },
      }
    );
  }
);
