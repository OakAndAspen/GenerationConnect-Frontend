import Backbone from "backbone";
import AppConfig from "config";

export default Backbone.Model.extend({

    url: function () {
        return AppConfig.apiUrl + "/juniors/" + this.id;
    },

    initialize: function (attrs, options) {


    },
    validate: function (attrs, options) {

    }

});