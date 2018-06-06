import Backbone from "backbone";
import Senior from "../models/Senior";

export default Backbone.Model.extend({

    initialize: function (attrs, options) {
        this.id = attrs.id;
        this.status = attrs.status;
        this.finPrevu = attrs.finPrevu;
        this.debutPrevu = attrs.debutPrevu;

    },

    validate: function (attrs, options) {

    }

});