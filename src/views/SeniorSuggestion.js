import Backbone from "backbone";
import template from "templates/pages/seniors/suggestion.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.model, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this.$el;
    }
});