import Backbone from "backbone";
import template from "templates/pages/juniors/profil.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.model, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            plagesHoraire: this.model.plagesHoraire,
            coordonnees: {
                prenom: this.model.prenom,
                nom: this.model.nom,
                noMobile: this.model.noMobile
            },
            competences: this.model.competences
        }));
        console.log(this.model.attributes);
        return this.$el;
    }
});