define(["kendo", "app/storage-service"], function (kendo, storage) {
    var viewModel = kendo.observable({

        options: {
            goodness: [
                { id: 1, name: "Bad" },
                { id: 2, name: "Below par" },
                { id: 3, name: "Average" },
                { id: 4, name: "Good" },
                { id: 5, name: "Excellent" }
            ],
            likert: [
                { id: 1, name: "Strongly disagree" },
                { id: 2, name: "Disagree" },
                { id: 3, name: "Neutral" },
                { id: 4, name: "Agree" },
                { id: 5, name: "Strongly agree" }
            ],
            gender: [
                { id: "m", name: "Male" },
                { id: "f", name: "Female" }
            ],
            frequency: [
                { id: 1, name: "About once a week" },
                { id: 2, name: "Fortnightly" },
                { id: 3, name: "About once a month" },
                { id: 4, name: "On occasions" },
                { id: 5, name: "My first visit" }
            ]
        },

        buttonText:"Take Survey",

        answers: {}

    });

    // now do all data checking
    var savedAnswers = storage.load("survey-answers");
    if (savedAnswers){
        viewModel.buttonText = "Continue Survey";
        viewModel.answers = JSON.parse(savedAnswers);
    }

    return viewModel;
});
