import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.lieu = attrs.lieu;
        this.date = attrs.date;
        this.heure = attrs.heure;
    },

    validate: function (attrs, options) {

    }

});