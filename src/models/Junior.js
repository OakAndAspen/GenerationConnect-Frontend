import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.prenom = attrs.prenom;
        this.nom = attrs.nom;
        this.noMobile = attrs.noMobile;
    },

    validate: function (attrs, options) {

    }

});