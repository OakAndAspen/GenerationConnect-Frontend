import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.id = attrs.id;
        this.nom = attrs.nom;
        this.description = attrs.description;
        this.sujets = attrs.sujets;
    },

    validate: function (attrs, options) {

    }

});