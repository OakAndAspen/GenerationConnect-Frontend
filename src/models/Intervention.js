import Backbone from "backbone";
import Senior from "../models/Senior";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.name = attrs.name;
        this.senior = "test";
        this.adresse = "adresse test"
    },

    validate: function (attrs, options) {

    }

});