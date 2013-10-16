define([], function () {
    var saver = {
        load: function(key) {
            return localStorage.getItem(key);
        },

        remove: function(key) {
            localStorage.removeItem(key);
        },

        save: function(key, value) {
            localStorage.setItem(key, value);
        }
    };

    return saver;
});
