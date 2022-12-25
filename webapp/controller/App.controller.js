sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast"
],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToastr} MessageToast
     */
    function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("square.controller.App", {
        onInit: function () {},
        onPressSquareNumber: function () {
            var inputNumber = parseInt(this.getView().byId("inputSquare").getValue());
            var square = inputNumber * inputNumber;
            console.log("%c The square of " + inputNumber + " is " + square + " ",
                         "background:#086; color:#f; font-size:16px;");
            MessageToast.show(inputNumber + "x" + inputNumber + " = " + square,
                {
                    duration: 6000,                 
                    at: "center center"           
                }
            );

        }
    });
});
