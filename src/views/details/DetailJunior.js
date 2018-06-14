import Backbone from "backbone";
import AppConfig from "config";
import template from "templates/details/DetailJunior.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this.$el;
    }
});