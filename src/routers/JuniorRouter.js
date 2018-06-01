import Backbone from "backbone";
import Dashboard from "../views/Dashboard";

export default Backbone.Router.extend({

    routes: {
        "juniors": "dashboard",
        "juniors/profil": "profil",
        "juniors/interventions": "interventions"
    },

    dashboard: function() {
        let links = [
            {
                'title': 'Mes interventions',
                'path': 'junior/interventions',
                'icon': 'fas fa-hands-helping'
            },
            {
                'title': 'Mon profil',
                'path': 'junior/profil',
                'icon': 'fas fa-user'
            },
            {
                'title': 'Schéma d\'intervention',
                'path': 'junior/schema',
                'icon': 'fas fa-exchange-alt'
            }];
        let dashboard = new Dashboard({
            links: links
        });
        $('#pageContent').html(dashboard.render());
    },

    profil: function() {
        $('#pageContent').html("<h1>Profil</h1>");
    },

    interventions: function() {
        $('#pageContent').html("<h1>Interventions</h1>");
    }
});