import Backbone from "backbone";
import dashboardTmpl from "templates/components/dashboard.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = dashboardTmpl;
        this.links = attrs.links;
    },

    render: function () {
        this.$el.html(this.template({
            links: this.links
        }));
        return this.$el;
    }
});