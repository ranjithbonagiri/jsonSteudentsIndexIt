sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("org.indexit.jsonstudents.controller.zStudents", {
        onInit() {
           //create a data
            var studentData = {
    "Name": "Rahul",
    "Age": "15",
    "RollNo": "1000",
    "Subjects": [
        {
            "English": "50",
            "Philosophy": [
                {
                    "SpclLit": "100",
                    "EnglishHonors": "120"
                }
            ]
        },
        {
            "Maths": "150"
        },
        {
            "Chemistry": "150"
        }
    ]
};

           

            //create a json and fill the json
             var jmodel = new JSONModel();
            jmodel.setData(studentData);

            this.getView().setModel(jmodel,"jModel")

        }
    });
});