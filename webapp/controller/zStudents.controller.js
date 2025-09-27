sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("org.indexit.jsonstudents.controller.zStudents", {
        onInit() {
            var jmodel = new JSONModel();
            var studentData = {
                "Name": "Rahul",
                "Age": "15"

            };
            jmodel.setData(studentData);

        }
    });
});