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
            links: this.links,
            logged: this.getLogged(),
            dashboard: this.getDashboard()
        }));
        return this.$el;
    },

    events: {
        'click #logout': 'logout'
    },

    logout: function() {
        //TODO: logout
    },

    getLogged: function () {
        if(localStorage.getItem('userType')) {
            return localStorage.getItem('userType');
        } else return null;
    },

    getDashboard: function () {
        let userType = localStorage.getItem('userType');
        if(userType == 'junior') return 'juniors';
        if(userType == 'senior') return 'seniors';
        if(userType == 'employe') return 'admin';
        return null;
    }
});