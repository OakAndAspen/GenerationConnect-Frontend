import Backbone from "backbone";
import template from "templates/forms/FormRequete.handlebars";

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
        let requete = $("#content").val();

        $.ajax({
            type: "POST",
            url: "http://pingouin.heig-vd.ch/intouchables/api/requete",
            data: {
                requete: requete
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