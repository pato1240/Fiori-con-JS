sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/logali/invoices/model/models",
    "sap/m/Text",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
], (UIComponent, models, Text, ResourceModel, HelloDialog) => {
    "use strict";

    return UIComponent.extend("com.logali.invoices.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
               // "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            // set data model on the view
            this.setModel(models.createRecipient());

            //set i18n model on the view
            var i18nModel = new ResourceModel({ bundleName: "com.logali.invoices.i18n.i18n" }); 
            this.setModel(i18nModel, "i18n");

            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function () {
            this._helloDialog.open();
        }

    });
});