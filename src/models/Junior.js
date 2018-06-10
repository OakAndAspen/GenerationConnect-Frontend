import Backbone from "backbone";

export default Backbone.Model.extend({

    url: function () {
        return "http://pingouin.heig-vd.ch/intouchables/api/juniors/" + this.id;
    },

    initialize: function (attrs, options) {


    },
    validate: function (attrs, options) {

    }

});