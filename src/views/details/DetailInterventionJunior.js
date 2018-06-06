import Backbone from "backbone";
import template from "templates/details/DetailInterventionJunior.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this.$el;
    }
});