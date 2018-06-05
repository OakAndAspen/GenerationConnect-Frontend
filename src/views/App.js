import Backbone from "backbone";

export default Backbone.View.extend({

    el: 'body',

    initialize: function (attrs, options) {
        this.routers = attrs.routers;
        this.redirect(attrs.landingPage);
    },

    events: {
        'click [data-target]': 'linkTo'
    },

    linkTo: function (event) {
        let page = $(event.target).attr('data-target');
        this.redirect(page);
    },

    redirect: function (page) {
        for (let router in this.routers) {
            for (let route in this.routers[router].routes) {
                if (route.localeCompare(page) == 0) {
                    //console.log(router + " : " + page);
                    this.routers[router].navigate(page, true);
                    break;
                }
            }
        }

    }
});