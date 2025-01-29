sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {

  XMLView.create({ id: "App", viewName: "djp.view.App" })
    .then(function (oView2) {
      oView2.placeAt("content")
    });

});