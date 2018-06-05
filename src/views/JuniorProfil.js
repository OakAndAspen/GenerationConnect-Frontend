import Backbone from "backbone";
import template from "templates/pages/juniors/profil.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.model, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            plagesHoraire: this.model.plagesHoraire.toJSON(),
            coordonnees: this.model.coordonnees,
            competences: this.model.competences
        }));
        console.log("Plages horaires :");
        console.log(this.model.plagesHoraire.toJSON());
        console.log("Compétences :");
        console.log(this.model.competences);
        console.log("Coordonnees");
        console.log(this.model.coordonnees);
        return this.$el;
    }
});