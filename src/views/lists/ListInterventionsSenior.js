import Backbone from "backbone";
import template from "templates/lists/ListInterventionsSenior.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.demandesNT = attrs.demandes;
        this.interventionsFutures = attrs.interventionsFutures;
        this.interventionsPassees = attrs.interventionsPassees;
        this.listenTo(this.collection, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            demandes: this.demandesNT,
            interventionsFutures: this.interventionsFutures,
            interventionsPassees: this.interventionsPassees,
        }));
        return this.$el;
    }
});