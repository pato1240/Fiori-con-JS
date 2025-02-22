sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 

/** 
 * @param {typeof sap.ui.model.json.JSONModel} JSONModel
 * @param {typeof sap.ui.Device} Device
 */

function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createRecipient: function () {
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            return new JSONModel(oData);
        }
    };
});