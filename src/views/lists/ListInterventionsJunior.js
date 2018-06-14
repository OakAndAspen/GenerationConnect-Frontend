import Backbone from "backbone";
import template from "templates/lists/ListInterventionsJunior.handlebars";
import AppConfig from "../../config";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        console.log("init attrs");
        console.log(attrs.demandes);
        console.log(attrs.interventionsFutures);
        console.log(attrs.interventionsPassees);
        this.demandesNT = attrs.demandes;
        this.interventionsFutures = attrs.interventionsFutures;
        this.interventionsPassees = attrs.interventionsPassees;

        this.listenTo(this.collection, "change add remove", this.render);
    },

    events: {
        'click #accepter': 'accepter'
    },

    accepter: function (event){
        let juniorID = localStorage.getItem('userID');
        let requeteID = $("#accepter").attr("data-id");

        $.ajax({
            type: "GET",
            url: AppConfig.apiUrl + "/soumissions/accept/" + requeteID + "/" + juniorID,
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

    render: function () {
        console.log("render this");

        console.log(this.demandesNT);
        console.log(this.interventionsFutures);
        console.log(this.interventionsPassees);

        this.$el.html(this.template({
            demandes: this.demandesNT,
            interventionsFutures: this.interventionsFutures,
            interventionsPassees: this.interventionsPassees,
        }));
        return this.$el;
    }
});