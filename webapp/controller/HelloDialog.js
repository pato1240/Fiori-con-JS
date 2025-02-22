sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.Fragment} Fragment
     */

    (ManagedObject, Fragment) => {
        "use strict";

        return ManagedObject.extend("com.logali.invoices.controller.HelloDialog", {

            constructor: function (oView) {
                this._oView = oView;
            },

            exit: function () {
                delete this._oView;
            },

            open: function () {

                const oView = this._oView;

                // create dialog lazily
                if (!oView.byId("helloDialog")) {

                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close();
                        }
                    };

                    // load asynctonous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "com.logali.invoices.fragments.HelloDialog",
                        controller: oFragmentController
                    }).then(function (oDialog) {
                            oView.addDependent(oDialog);
                            oDialog.open();
                        });
                } else {
                    oView.byId("helloDialog").open();
                }
            }
            
        });
    });