import Backbone from "backbone";

export default Backbone.Model.extend({
    defaults: function() {
        return {
            "days": ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
            "competences": ["Informatique hardware",
            "Informatique soft",
            "Téléphonie hardware",
            "Téléphonie soft",
            "Appels vidéos",
            "Mise à jour programmes",
            "Services en ligne"]
        }
    },
    initialize: function (attrs, options) {
        this.prenom = attrs.prenom;
        this.nom = attrs.nom;
        this.noMobile = attrs.noMobile;
    },
    validate: function (attrs, options) {

    }

});