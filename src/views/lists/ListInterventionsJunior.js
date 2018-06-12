import Backbone from "backbone";
import template from "templates/lists/ListInterventionsJunior.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        /*this.demandes = attrs.demandes;
        this.interventionsFutures = attrs.interventionsFutures;
        this.interventionsPassees = attrs.interventionsPassees;*/
        this.listenTo(this.collection, "change add remove", this.render);
    },

    render: function () {
        console.log(this.demandes);
        console.log(this.interventionsFutures);
        console.log(this.interventionsPassees);

        this.$el.html(this.template({
            demandes: this.demandes.toJSON(),
            interventionsFutures: this.interventionsFutures.toJSON(),
            interventionsPassees: this.interventionsPassees.toJSON()
        }));
        return this.$el;
    }
});