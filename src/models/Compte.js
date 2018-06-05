import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.prenom = attrs.prenom;
        this.nom = attrs.nom;
    },

    validate: function (attrs, options) {

    }

});