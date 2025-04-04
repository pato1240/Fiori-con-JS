sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/logali/invoices/model/models",
    "./controller/HelloDialog",
], (UIComponent, models, HelloDialog) => {
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