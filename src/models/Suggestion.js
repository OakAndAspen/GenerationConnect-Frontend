import Backbone from "backbone";

export default Backbone.Model.extend({

    url: function () {
        return "http://pingouin.heig-vd.ch/intouchables/api/suggestions/" + this.id;
    },

    initialize: function (attrs, options) {

    },

    validate: function (attrs, options) {

    }

});