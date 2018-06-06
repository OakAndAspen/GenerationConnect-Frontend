import Backbone from "backbone";
import template from "templates/special/ProfilJunior.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.model, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            id: this.model.id,
            prenom: this.model.prenom,
            nom: this.model.nom,
            telephone: this.model.telephone,
            email: this.model.email,
            adresseHabitation: this.model.adresseHabitation.toJSON(),
            limitetempstransport: this.model.limitetempstransport,
            status: this.model.status,
            adresseDepart: this.model.adresseDepart,
            adresseFacturation: this.model.adresseFacturation,
            noAVS: this.model.noAVS,
            banqueNom: this.model.banqueNom,
            banqueBIC: this.model.banqueBIC,
            banqueIBAN: this.model.banqueIBAN,
            matieres: this.model.matieres.toJSON(),
            plagesHoraire: this.model.plagesHoraire.toJSON()
        }));

        return this.$el;
    }
});