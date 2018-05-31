import Backbone from "backbone";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.name = attrs.name;
    },

    validate: function (attrs, options) {

    }

});