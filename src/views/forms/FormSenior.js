import Backbone from "backbone";
import template from "templates/forms/FormSenior.handlebars";

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
        let email = $("#email").val();
        let prenom = $("#prenom").val();
        let nom = $("#nom").val();
        let ligne1 = $("#ligne1").val();
        let ligne2 = $("#ligne2").val();
        let ligne3 = $("#ligne3").val();
        let NoNPA = $("#noNPA").val();
        let ville = $("#ville").val();
        let motdepasse = "";
        if($("#mdp").val() == $("#mdp").val()){
            motdepasse = $("#mdp").val();
        };

        $.ajax({
            type: "POST",
            url: "http://pingouin.heig-vd.ch/intouchables/api/senior",
            data: {
                prenom: prenom,
                nom: nom,
                email: email,
                ligne1: ligne1,
                ligne2: ligne2,
                ligne3: ligne3,
                NoNPA: NoNPA,
                ville: ville,
                motdepasse: motdepasse
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

        console.log("Envoyer l'inscription");
    }

});