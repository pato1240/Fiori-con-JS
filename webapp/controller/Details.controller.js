sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], 

    /** 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.routing.History} History
     * @param {typeof sap.ui.core.UIComponent} UIComponent
    */

    (Controller, History, UIComponent) => {
        "use strict";

        return Controller.extend("com.logali.invoices.controller.Details", {
            onInit() {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatched, this);
            },

            _onObjectMatched: function (oEvent) {
                this.byId("rating").reset();
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                    model: "northwind"
                });
            },

            onNavBack: function () {
                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash!=undefined) { 
                    window.history.go(-1);
                }else{
                    const oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteApp", {}, true);
                }

            },

            onRatingChange: function (oEvent) {
                const fvalue = oEvent.getParameter("value");
                const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
                sap.m.MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fvalue]));
            }
        });
    });