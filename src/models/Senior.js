import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.id = attrs.id;
        this.prenom = attrs.prenom;
        this.nom = attrs.nom;
        this.telephone = attrs.telephone;
        this.email = attrs.email;
        this.adresseHabitation = attrs.adresseHabitation; // Objet
        this.preference = attrs.preference;
        this.forfait = attrs.forfait; //Objet
        this.matieres = attrs.matieres; //tableau d'objets matieres avec objets sujet interieurs

    },

    validate: function (attrs, options) {

    }

});