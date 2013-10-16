define(["kendo"], function (kendo) {
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

        answers: {
            a1: null,
            a2: null,
            b1: null,
            b2: null,
            b3: null,
            b4: null,
            b5: null,
            b6: null,
            c1: null,
            c2: null,
            c3: null,
            d1: null,
            d2: null,
            x: null
        }

    });

    return viewModel;
});
