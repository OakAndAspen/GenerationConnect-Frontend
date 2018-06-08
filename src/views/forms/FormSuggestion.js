import Backbone from "backbone";
import template from "templates/forms/FormSuggestion.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
    },

    render: function () {
        this.$el.html(this.template);
        return this.$el;
    },

    events: {
        'click #send': 'send'
    },

    send: function (event) {
        let suggestion = $("#suggestion").val();
        $.ajax({
            type: "POST",
            url: "http://pingouin.heig-vd.ch/intouchables/api/suggestion",
            data: {
                suggestion: suggestion
            },
            success: function (data) {
                console.log("Successfully connected!");
                console.log(JSON.stringify(data));
                //localStorage.setItem("userId", data.id);
                //location.reload();
            },
            error: function () {
                console.log("Erreur");
            }
        });
    }
});