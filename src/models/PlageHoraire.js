import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.jour = attrs.jour;
        this.heureDebut = attrs.heureDebut;
        this.heureFin = attrs.heureFin;
    },

    validate: function (attrs, options) {

    }

});