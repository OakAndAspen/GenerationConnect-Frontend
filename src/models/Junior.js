import Backbone from "backbone";

export default Backbone.Model.extend({
    defaults: {
            competences: ["Informatique hardware",
            "Informatique soft",
            "Téléphonie hardware",
            "Téléphonie soft",
            "Appels vidéos",
            "Mise à jour programmes",
            "Services en ligne"]
    },
    initialize: function (attrs, options) {
        this.prenom = attrs.prenom;
        this.nom = attrs.nom;
        this.noMobile = attrs.noMobile;
        this.plagesHoraire = attrs.plagesHoraire.toJSON();
        console.log(this.plagesHoraire);
    },
    validate: function (attrs, options) {

    }

});