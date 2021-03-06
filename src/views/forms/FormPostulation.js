import Backbone from "backbone";
import template from "templates/forms/FormPostulation.handlebars";
import AppConfig from "config";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.templateRow = "";
        this.first = 0;
        this.disponibilite = new Array();
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    },

    events: {
        'submit form': 'submit',
        'click #addDispo': 'addDispo'
    },

    addDispo: function (event) {
        console.log("test");

        $("#tableDispo").css("display","block");

        if(this.first == 0)
        {
            this.templateRow = $("#rowDispo").clone();
            $("#rowDispo").remove();
            this.first = 1;
            console.log("if");
        }

        let jour = $("#jour").val();
        let debut = $("#heureDebut").val();
        let fin = $("#heureFin").val();

        let row = this.templateRow.clone();
        row.attr("id","");

        row.append("<td>"+ jour +"</td>");
        row.append("<td>"+ debut +"</td>");
        row.append("<td>"+ fin +"</td>");

        let plage = {
            'jour': jour,
            'debut': debut,
            'fin': fin
        };

        this.disponibilite.push(plage);

        $("#tbody").append(row);
    },

    submit: function (event) {

        event.preventDefault();

        let email = $("#email").val();
        let prenom = $("#prenom").val();
        let nom = $("#nom").val();
        let motdepasse = $("#motdepasse1").val();
        let motdepasse2 = $("#motdepasse2").val();


        let phone = $("#telephone").val();
        let limitetemps = $("#limitetemps").val();

        let ligne1hab = $("#ligne1hab").val();
        let ligne2hab = $("#ligne2hab").val();
        let ligne3hab = $("#ligne3hab").val();
        let NoNPAhab = $("#noNPAhab").val();
        let villehab = $("#villehab").val();

        let avs = $("#noavs").val();
        let banquenom = $("#banquenom").val();
        let banquebic = $("#banquebic").val();
        let banqueiban = $("#banqueiban").val();

        let ligne1loc = $("#ligne1hab").val();
        let ligne2loc = $("#ligne2hab").val();
        let ligne3loc = $("#ligne3hab").val();
        let NoNPAloc = $("#noNPAhab").val();
        let villeloc = $("#villehab").val();

        if($("#adresse1").val() != 0){
            ligne1loc = $("#ligne1loc").val();
            ligne2loc = $("#ligne2loc").val();
            ligne3loc = $("#ligne3loc").val();
            NoNPAloc = $("#noNPAloc").val();
            villeloc = $("#villeloc").val();
        }

        let ligne1fac = $("#ligne1hab").val();
        let ligne2fac = $("#ligne2hab").val();
        let ligne3fac = $("#ligne3hab").val();
        let NoNPAfac = $("#noNPAhab").val();
        let villefac = $("#villehab").val();

        if($("#adresse2").val() != 0){
            ligne1fac = $("#ligne1fac").val();
            ligne2fac = $("#ligne2fac").val();
            ligne3fac = $("#ligne3fac").val();
            NoNPAfac = $("#noNPAfac").val();
            villefac = $("#villefac").val();
        }



        let form = new FormData();

        form.append("prenom",prenom);
        form.append("nom",nom);
        form.append("email",email);
        form.append("motdepasse",motdepasse);
        form.append("motdepasse_confirmation",motdepasse2);
        form.append("telephone",phone);

        form.append("adresse_habitation[ligne1]",ligne1hab);
        form.append("adresse_habitation[ligne2]",ligne2hab);
        form.append("adresse_habitation[ligne3]",ligne3hab);
        form.append("adresse_habitation[ville]",villehab);
        form.append("adresse_habitation[npa]",NoNPAhab);

        form.append("adresse_depart[ligne1]",ligne1loc);
        form.append("adresse_depart[ligne2]",ligne2loc);
        form.append("adresse_depart[ligne3]",ligne3loc);
        form.append("adresse_depart[ville]",villeloc);
        form.append("adresse_depart[npa]",NoNPAloc);

        form.append("adresse_facturation[ligne1]",ligne1fac);
        form.append("adresse_facturation[ligne2]",ligne2fac);
        form.append("adresse_facturation[ligne3]",ligne3fac);
        form.append("adresse_facturation[ville]",villefac);
        form.append("adresse_facturation[npa]",NoNPAfac);

        form.append("NoAVS",avs);
        form.append("BanqueNom",banquenom);
        form.append("BanqueBIC",banquebic);
        form.append("BanqueIBAN",banqueiban);
        form.append("LimiteTempsTransport",limitetemps);

        form.append("cv", $("#cvFile")[0].files[0]);

        let i = 0;
        this.disponibilite.forEach(function(item) {
            form.append("plageshoraires[" + i++ + "]", '{"jour":"' + item.jour + '", "debut":"' + item.debut + '", "fin":"' + item.fin + '"}');
        });

        $.ajax({
            type: "POST",
            url: AppConfig.apiUrl + "/inscription/junior",
            cache: false,
            processData: false,
            contentType: false,
            data: form,
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
        console.log("Envoyer la postulation");
    }
});
