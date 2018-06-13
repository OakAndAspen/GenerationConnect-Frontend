import Backbone from "backbone";
import template from "templates/forms/FormPostulation.handlebars";
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
        'click #send': 'send'
    },

    send: function (event) {
        let email = $("#email").val();
        let prenom = $("#prenom").val();
        let nom = $("#nom").val();
        let motdepasse = "";
        if($("#motdepasse1").val() == $("#motdepasse2").val()){
            motdepasse = $("#motdepasse1").val();
        };
        let phone = $("#telephone").val();
        let limitetemps = $("#limitetemps").val();

        let ligne1hab = $("#ligne1han").val();
        let ligne2hab = $("#ligne2hab").val();
        let ligne3hab = $("#ligne3hab").val();
        let NoNPAhab = $("#noNPAhab").val();
        let villehab = $("#villehab").val();

        let avs = $("#noavs").val();
        let banquenom = $("#banquenom").val();
        let banquebic = $("#banquebic").val();
        let banqueiban = $("#banqueiban").val();

        if($("#adresse1").val() != 0){
            let ligne1loc = $("#ligne1loc").val();
            let ligne2loc = $("#ligne2loc").val();
            let ligne3loc = $("#ligne3loc").val();
            let NoNPAloc = $("#noNPAloc").val();
            let villeloc = $("#villeloc").val();
        }

        if($("#adresse2").val() != 0){
            let ligne1fac = $("#ligne1fac").val();
            let ligne2fac = $("#ligne2fac").val();
            let ligne3fac = $("#ligne3fac").val();
            let NoNPAfac = $("#noNPAfac").val();
            let villefac = $("#villefac").val();
        }

        let fileCV = $("#cvFile").files;

        $.ajax({
            type: "POST",
            url: AppConfig.apiUrl + "/inscription/junior",
            data: {
                prenom: prenom,
                nom: nom,
                email: email,
                content: message,
                motdepasse: motdepasse,
                telephone: phone,
                Status: "candidat",
                'adresse_habitation[ligne1]': ligne1hab,
                'adresse_habitation[ligne2]': ligne2hab,
                'adresse_habitation[ligne3]': ligne3hab,
                'adresse_habitation[ville]': villehab,
                'adresse_habitation[npa]': NoNPAhab,

                'adresseDeDepart[ligne1]': ligne1loc,
                'adresseDeDepart[ligne2]': ligne2loc,
                'adresseDeDepart[ligne3]': ligne3loc,
                'adresseDeDepart[ville]': villeloc,
                'adresseDeDepart[npa]': NoNPAloc,
                'adresseDeFacturation[ligne1]': ligne1fac,
                'adresseDeFacturation[ligne2]': ligne2fac,
                'adresseDeFacturation[ligne3]': ligne3fac,
                'adresseDeFacturation[ville]': villefac,
                'adresseDeFacturation[npa]': NoNPAfac,
                NoAVS: avs,
                BanqueNom: banquenom,
                BanqueBIC: banquebic,
                BanqueIBAN: banqueiban,
                cv: fileCV
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