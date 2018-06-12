import Backbone from "backbone";
import NavBar from "views/components/NavBar";
import PublicRouter from "routers/PublicRouter";
import JuniorRouter from "routers/JuniorRouter";
import AdminRouter from "routers/AdminRouter";
import SeniorRouter from "routers/SeniorRouter";

export default Backbone.View.extend({
    el: 'body',

    initialize: function (attrs, options) {
        this.routers = {
            publicRouter: new PublicRouter(),
            adminRouter: new AdminRouter(),
            juniorRouter: new JuniorRouter(),
            seniorRouter: new SeniorRouter()
        };

        // Affichage de la barre de navigation
        let navBar = new NavBar();
        $('#pageHeader').html(navBar.render());
    }/*,

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
                    this.routers[router].navigate(page, true);
                    Backbone.history.loadUrl();
                    break;
                }
            }
        }
    }*/
});