import Backbone from "backbone";

export default Backbone.View.extend({

    el: 'body',

    initialize: function (attrs, options) {
        this.routers = attrs.routers;
        this.routers.publicRouter.navigate("accueil", true); // TEMP -> gérer le rechargement de la page
    },

    events: {
        'click [data-target]': 'redirect'
    },

    redirect: function (event) {
        let page = $(event.target).attr('data-target');
        console.log("Looking for: "+ page);

        for (let router in this.routers) {
            for (let route in this.routers[router].routes) {
                if (route.localeCompare(page) == 0) {
                    this.routers[router].navigate(page, true);
                    console.log('Found it in: ' + router);
                    break;
                }
            }
        }

    }
});