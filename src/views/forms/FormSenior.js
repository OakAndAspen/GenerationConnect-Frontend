import Backbone from "backbone";
import template from "templates/forms/FormSenior.handlebars";
import AppConfig from "../../config";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.forfaits = attrs.forfaits;
    },

    render: function () {
        this.$el.html(this.template({
            forfaits: this.forfaits.toJSON(),
        }));
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
        let phone = $("#telephone").val();
        let forfaitID = $('input[name="radioForfait"]:checked').val();
        let pref = $("#preference").val();

        $.ajax({
            type: "POST",
            url: AppConfig.apiUrl + "/inscription/senior",
            data: {
                prenom: prenom,
                nom: nom,
                email: email,
                telephone: phone,
                ligne1: ligne1,
                ligne2: ligne2,
                ligne3: ligne3,
                npa: NoNPA,
                ville: ville,
                motdepasse: motdepasse,
                forfait_id: forfaitID,
                preference: pref,
            },
            success: function (data) {
                console.log("Successfully connected!");
                console.log(JSON.stringify(data));
                //localStorage.setItem("userId", data.id);
                //location.reload();
                $('#successModal').modal('show');
                $('#successModal').on('hidden.bs.modal', function () {
                    window.location.hash = '#login';
                })
            },
            error: function () {
                $('#errorsModal').modal('show');
                console.log("Erreur");
            }
        });

        console.log("Envoyer l'inscription");
    }

});