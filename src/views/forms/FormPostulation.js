import Backbone from "backbone";
import template from "templates/forms/FormPostulation.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    },

    events: {
        'click #send': 'send'
    },

    send: function (event) {
        let prenom = $("#prenom").val();
        let nom = $("#nom").val();
        let datenaissance = $("#dateNaissance").val();
        let email = $("#email").val();
        let message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "http://pingouin.heig-vd.ch/intouchables/api/contact",
            data: {
                prenom: prenom,
                nom: nom,
                dateNaissance: datenaissance,
                email: email,
                content: message
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
        console.log("Envoyer la postulation");
    }

});