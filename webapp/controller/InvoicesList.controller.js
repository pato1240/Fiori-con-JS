sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/InvoicesFormatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
    */

    (Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) => {
        "use strict";

        return Controller.extend("com.logali.invoices.controller.InvoicesList", {

            formatter: InvoicesFormatter,

            onInit() {
                var oData = {
                    currency: {
                        name: "USD"
                    }
                };
                var oCurrency = new JSONModel(oData);
                this.getView().setModel(oCurrency, "currencies");
            },

            onFilter: function (oEvent){
                const aFilter = [];
                const sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                };
                const oList = this.byId("invoiceList");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            }

        
        });
    });