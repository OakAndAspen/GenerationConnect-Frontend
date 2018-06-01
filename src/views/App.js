import Backbone from "backbone";

export default Backbone.View.extend({

    el: 'body',

    initialize: function (attrs, options) {
        this.routers = attrs.routers;
        this.routers.publicRouter.navigate("accueil", true); // TEMP -> gérer le rechargement de la page
    },

    events: {
        'click span[data-target]': 'redirect'
    },

    redirect: function (event) {
        let page = $(event.target).attr('data-target');
        for (let router in this.routers) {
            for (let route in this.routers[router]) {
                if (route == page) {
                    this.routers[router].navigate(page, true);
                    break;
                }
            }
        }

    }
});