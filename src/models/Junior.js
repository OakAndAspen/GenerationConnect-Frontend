import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.coordonnees = {
            prenom: this.prenom,
            nom: this.nom,
            noMobile: attrs.noMobile,
        };
        this.plagesHoraire = attrs.plagesHoraire;
        this.competences = [
            {titre: "Informatique hardware"},
            {titre: "Informatique soft"},
            {titre: "Téléphonie hardware"},
            {titre: "Téléphonie soft"},
            {titre: "Appels vidéos"},
            {titre: "Mise à jour programmes"},
            {titre: "Services en ligne"}
        ];
    },
    validate: function (attrs, options) {

    }

});