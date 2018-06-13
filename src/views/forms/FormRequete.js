import Backbone from "backbone";
import template from "templates/forms/FormRequete.handlebars";
import AppConfig from "../../config";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.sujets = attrs.sujets;
        this.template = template;


    },

    render: function () {
        this.$el.html(this.template({
            sujets: this.sujets.toJSON(),
        }));
        return this.$el;
    },

    events: {
        'click #send': 'send'
    },

    send: function (event) {



        let type = $('#type').val();

        let matiereID = $('input[name="matiereRadio"]:checked').val();

        let soumisParId = localStorage.getItem('userID');
        let jours = new Array('dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi');
        let dateJour = $("#dateJour").val();
        let jourdate = new Date(dateJour);
        console.log(jourdate.getDay());
        let joursemaine = jours[jourdate.getDay()]; //+ " " + aujourdhui.getDate() + "/" + aujourdhui.getMonth() + "/" + aujourdhui.getFullYear();

        let heureDebut = $("#heuredebut").val();
        let heureFin = $("#heurefin").val();
        let date = $("#dateJour").val();
        let commentaire = $("#commentaire").val();



        $.ajax({
            type: "POST",
            url: AppConfig.apiUrl + "/requetes",
            data: {
                type: type,
                matiere_id: matiereID,
                soumis_par: soumisParId,
                'plage_horaire[joursemaine]': joursemaine,
                'plage_horaire[heuredebut]': heureDebut,
                'plage_horaire[heurefin]': heureFin,
                'plage_horaire[date]': date,
                commentaire: commentaire
            },
            crossDomain: true,
            success: function (data) {

                console.log("Successfully connected!");
                console.log(JSON.stringify(data));
                //localStorage.setItem("userId", data.id);
                //location.reload();
                $('#successModal').modal('show');
                $('#successModal').on('hidden.bs.modal', function () {
                    window.location.hash = '#seniors/interventions';
                })


            },
            error: function () {
                $('#errorsModal').modal('show');

                console.log("Erreur");
            }
        });


    },


});