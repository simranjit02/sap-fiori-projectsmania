sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "prjmania/projectmania/model/models",
  ],
  (Controller, JSONModel, Models) => {
    return Controller.extend(
      "prjmania.projectmania.controller.employee.EmployeeList",
      {
        onInit() {
          //   var oEmployeeModel = new JSONModel("../../model/employees.json");

          //   console.log("oEmployeeModel", oEmployeeModel);
          //   sap.ui.getCore().setModel(oEmployeeModel, "employee");
          var oEmployeeModel = Models.createJSONModel();
          console.log("oEmployeeModel", oEmployeeModel);
          sap.ui.getCore().setModel(oEmployeeModel, "employee");
        },
      }
    );
  }
);
