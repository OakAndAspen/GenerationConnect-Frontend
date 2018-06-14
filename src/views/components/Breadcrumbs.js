import Backbone from "backbone";
import template from "templates/components/breadcrumbs.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
    },

    render: function () {
        if (this.getPrivate()) {
            this.$el.html(this.template({
                links: this.getLinks()
            }));
        } else {
            this.$el.empty();
        }
        return this.$el;
    },

    getPrivate: function () {
        let scope = location.hash.substring(1).split('/')[0];
        if (scope == 'admin' || scope == 'juniors' || scope == 'seniors') {
            return true;
        } else return false;
    },

    getLinks: function () {
        let routes = location.hash.substring(1).split('/');
        let links = [{
            target: routes[0],
            title: "Tableau de bord"
        }];
        if (routes.length > 1) {
            links.push({
                target: routes[0] + "/" + routes[1],
                title: routes[1]
            });
        }
        if (routes.length > 2) {
            links.push({
                target: '',//routes[0] + "/" + routes[1] + "/" + routes[2],
                title: routes[2]
            });
        }

        return links;
    }
});