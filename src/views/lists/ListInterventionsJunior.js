import Backbone from "backbone";
import template from "templates/lists/ListInterventionsJunior.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listeDemandes = attrs.listeDemandes;
        this.listenTo(this.collection, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            demandes: this.listeDemandes.toJSON(),
            interventions: this.collection.toJSON()
        }));
        return this.$el;
    }
});