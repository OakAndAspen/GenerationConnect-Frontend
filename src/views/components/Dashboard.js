import Backbone from "backbone";
import template from "templates/components/dashboard.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.links = attrs.links;
    },

    render: function () {
        this.$el.html(this.template({
            links: this.links
        }));
        return this.$el;
    }
});