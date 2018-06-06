import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.id = attrs.id;
        this.prenom = attrs.prenom;
        this.nom = attrs.nom;
        this.telephone = attrs.telephone;
        this.email = attrs.email;
        this.adresseHabitation = attrs.adresseHabitation; //Objet
        this.limitetempstransport = attrs.limitetempstransport;
        this.status = attrs.status;
        this.adresseDepart = attrs.adresseDepart; //objet
        this.adresseFacturation = attrs.adresseFacturation; //objet
        this.noAVS = attrs.noAVS;
        this.banqueNom = attrs.banqueNom;
        this.banqueBIC = attrs.banqueBIC;
        this.banqueIBAN = attrs.banqueIBAN;
        this.matieres = attrs.matieres; //tableau d'objets matieres avec objets sujet interieurs
        this.plagesHoraire = attrs.plagesHoraire; // Objet
        this.interventions = attrs.interventions; //tableau d'objets intervention
    },
    validate: function (attrs, options) {

    }

});