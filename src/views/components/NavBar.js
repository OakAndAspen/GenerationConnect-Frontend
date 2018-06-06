import Backbone from "backbone";
import template from "templates/components/navBar.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.links = [
            {
                "target": "accueil",
                "title": "Accueil"
            },
            {
                "target": "infosJuniors",
                "title": "Juniors"
            },
            {
                "target": "infosSeniors",
                "title": "Seniors"
            },
            {
                "target": "contact",
                "title": "Contact"
            },
        ];
    },

    render: function () {
        this.$el.html(this.template({
            links: this.links
        }));
        return this.$el;
    }
});