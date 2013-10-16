require.config({
    paths: {
        jQuery: "libs/jquery.min",
        kendo: "libs/kendo.mobile.min"
    },
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            deps: ["jQuery"],
            exports: "kendo"
        }
    }
});

// Expose the app module to the global scope so Kendo can access it.
var smartSurvey;
 
require(["app/app"], function (application) {
    smartSurvey = application;
    smartSurvey.init();
});