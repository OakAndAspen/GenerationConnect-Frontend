import Backbone from "backbone";
import aide from "templates/pages/aide.handlebars";
import accueil from "templates/pages/accueil.handlebars";
import infosJuniors from "templates/pages/infosJuniors.handlebars";
import infosSeniors from "templates/pages/infosSeniors.handlebars";
import schema from "templates/pages/schema.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        let aide = aide;
        let accueil = accueil;
        let infosJuniors = infosJuniors;
        let infosSeniors = infosSeniors;
        let schema = schema;
        this.template = eval(attrs.page);
        this.listenTo(this.model, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template);
        return this.$el;
    }
});