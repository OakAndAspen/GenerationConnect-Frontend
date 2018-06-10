import Backbone from "backbone";
import Seniors from "collections/Seniors";

export default Backbone.Model.extend({

    url: function () {
        return "http://pingouin.heig-vd.ch/intouchables/api/seniors/" + this.id;
    },

    initialize: function (attrs, options) {

    },

    validate: function (attrs, options) {

    }

});