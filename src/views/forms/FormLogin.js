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
                if(data.junior) {
                    localStorage.setItem("userType", "junior");
                    if(data.junior) window.location.hash = "#juniors";
                }
                else if(data.senior) {
                    localStorage.setItem("userType", "senior");
                    if(data.senior) window.location.hash = "#seniors";
                }
                else if(data.employe) {
                    localStorage.setItem("userType", "employe");
                    if(data.employe) window.location.hash = "#admin";
                }

                // Redirection
                location.reload();
            },
            error: function () {
                console.log("Erreur");
            }
        });
    }
});