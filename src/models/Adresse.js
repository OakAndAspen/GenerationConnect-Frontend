import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.id = attrs.id;
        this.ligne1 = attrs.ligne1;
        this.ligne2 = attrs.ligne2;
        this.ligne3 = attrs.ligne3;
        this.ville = attrs.ville;
        this.pays = attrs.pays;
        this.npa = attrs.npa;
    },

    validate: function (attrs, options) {

    }

});