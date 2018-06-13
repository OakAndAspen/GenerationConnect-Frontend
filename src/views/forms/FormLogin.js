import Backbone from "backbone";
import template from "templates/forms/FormLogin.handlebars";
import AppConfig from "config";


export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    },

    events: {
        'click #login': 'login'
    },

    login: function (event) {
        let email = $('#email').val();
        let password = $('#password').val();

        // Requête AJAX pour le login
        $.ajax({
            type: "POST",
            url: AppConfig.apiUrl + "/login",
            data: {
                email: email,
                motdepasse: password
            },
            success: function (data) {
                console.log("Successfully connected!");
                console.log(JSON.stringify(data));
                localStorage.setItem("userID", data.id);

                // Redirection vers la bonne page
                if(data.employe) window.location.hash = "#admin";
                if(data.junior) window.location.hash = "#juniors";
                if(data.senior) window.location.hash = "#seniors";

                location.reload();
            },
            error: function () {
                console.log("Erreur");
            }
        });
    }
});