/*global QUnit*/

sap.ui.define([
	"org/indexit/jsonstudents/controller/zStudents.controller"
], function (Controller) {
	"use strict";

	QUnit.module("zStudents Controller");

	QUnit.test("I should test the zStudents controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
