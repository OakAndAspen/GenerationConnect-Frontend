import Backbone from "backbone";
import Seniors from "collections/Seniors";

export default Backbone.Model.extend({

    url: function () {

        return "http://localhost/ProjWeb-Back/public/api/seniors/" + this.id;
    },

    initialize: function (attrs, options) {

    },

    validate: function (attrs, options) {

    }

});