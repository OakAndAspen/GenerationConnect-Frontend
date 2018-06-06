import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.nom = attrs.nom;
        this.description = attrs.description;
        this.prix = attrs.prix;
    },

    validate: function (attrs, options) {

    }

});