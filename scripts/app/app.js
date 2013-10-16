define(["jQuery", "kendo", "app/survey-model"], function ($, kendo, surveyModel) {
    var _app;
    var nextLink, prevLink, backButtonText;

    var module = {
        init: function() {
            _app = new kendo.mobile.Application(document.body);
            console.log("App Initialized");
        },

        app: _app,

        goNext: function(event) {
            console.log("Going next to: "+ nextLink);
            _app.navigate(nextLink, "slide");
        },

        goPrev: function(event) {
            event.preventDefault();
            console.log("Going prev to: "+ prevLink);
            _app.navigate(prevLink, "slide:left reverse");
        },

        submitSurvey: function(event) {
            console.log('submit survey');
        },

        resetSurvey: function(event) {
            console.log('reset survey');
        },

        cancel: function(event) {
            console.log("Cancel");
            module.resetSurvey(null);
        },

        viewInit: function(e) {
            var viewId = this.element.prop("id");
            console.log("View inited: " + viewId);
        },


        viewDidAppear: function(e) {
            var viewId = this.element.prop("id");
            console.log("View will appear: " + viewId);

            switch(viewId) {
                case "home-view":
                    prevLink = "";
                    nextLink = "views/page1-view.html";
                    backButtonText = "";
                    break;
                case "page1-view":
                    prevLink = "#home-view";
                    nextLink = "views/page2-view.html";
                    backButtonText = "Home";
                    break;
                case "page2-view":
                    prevLink = "views/page1-view.html";
                    nextLink = "views/page3-view.html";
                    backButtonText = "Step 1";
                    break;
                case "page3-view":
                    prevLink = "views/page2-view.html";
                    nextLink = "views/page4-view.html";
                    backButtonText = "Step 2";
                    break;
                case "page4-view":
                    prevLink = "views/page3-view.html";
                    nextLink = "views/thankyou-view.html";
                    backButtonText = "Step 3";
                    break;
                case "thankyou-view":
                    prevLink = "";
                    nextLink = "#home-view";
                    break;
            }
            e.view.header.find(".backbutton").text(backButtonText);

            if (viewId == "home-view" || viewId == "thankyou-view") {
                e.view.header.find(".backbutton").hide();
                e.view.header.find(".cancelbutton").hide();
            } else {
                e.view.header.find(".backbutton").show();
                e.view.header.find(".cancelbutton").show();
            }

        },

        viewModel: surveyModel
    }

    return module;
});