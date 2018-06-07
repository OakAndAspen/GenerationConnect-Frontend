import Backbone from "backbone";
import template from "templates/forms/FormRequete.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
    },

    render: function () {
        this.$el.html(this.template);
        return this.$el;
    }
});