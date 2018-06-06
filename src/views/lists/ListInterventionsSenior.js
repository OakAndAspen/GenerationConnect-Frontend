import Backbone from "backbone";
import template from "templates/lists/ListInterventionsSenior.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.collection, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            interventions: this.collection.toJSON()
        }));
        return this.$el;
    }
});