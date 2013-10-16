define(["jQuery", "kendo", "app/survey-model"], function ($, kendo, surveyModel) {
    var _app;
    var nextLink, prevLink, backButtonText;


    return {
        init: function() {
            _app = new kendo.mobile.Application(document.body);
            console.log("App Initialized");
        },

        app: _app,

        goNext: function(event) {
            console.log("Going next to: "+ nextLink);
            _app.navigate(nextLink, "slide");
            _app.view().header.find(".backbutton").text(backButtonText);
        },

        goPrev: function(event) {
            event.preventDefault();
            console.log("Going prev to: "+ prevLink);
            _app.navigate(prevLink, "slide:left reverse");
            _app.view().header.find(".backbutton").text(backButtonText);
        },

        cancel: function(event) {
            console.log("Cancel");
        },

        viewInit: function(e) {
            var viewId = this.element.prop("id");
            console.log("View inited: " + viewId);
        },

        viewWillAppear: function(e) {
            var viewId = this.element.prop("id");
            console.log("View will appear: " + viewId);
            if (viewId == "home-view" || viewId == "thankyou-view") {
                e.view.header.find(".backbutton").hide();
                e.view.header.find(".cancelbutton").hide();
            } else {
                e.view.header.find(".backbutton").show();
                e.view.header.find(".cancelbutton").show();
            }
            switch(viewId) {
                case "home-view":
                    prevLink = "";
                    nextLink = "#page1-view";
                    backButtonText = "";
                    break;
                case "page1-view":
                    prevLink = "#home-view";
                    nextLink = "#page2-view";
                    backButtonText = "Home";
                    break;
                case "page2-view":
                    prevLink = "#page1-view";
                    nextLink = "#page3-view";
                    backButtonText = "Step 1";
                    break;
                case "page3-view":
                    prevLink = "#page2-view";
                    nextLink = "#page4-view";
                    backButtonText = "Step 2";
                    break;
                case "page4-view":
                    prevLink = "#page3-view";
                    nextLink = "#thankyou-view";
                    backButtonText = "Step 3";
                    break;
                case "thankyou-view":
                    prevLink = "";
                    nextLink = "#home-view";
                    break;
            }
        },

        viewModel: surveyModel
    }
});