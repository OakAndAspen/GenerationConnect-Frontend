import Backbone from "backbone";

// Views
import Dashboard from "../views/Dashboard";

export default Backbone.Router.extend({

    routes: {
        "admin": "dashboard",
        "admin/juniors": "juniors",
        "admin/seniors": "seniors",
        "admin/interventions": "interventions",
        "admin/formations": "formations"
    },

    dashboard: function () {
        let links = [
            {
                'title': 'Juniors',
                'path': 'admin/juniors',
                'icon': 'fas fa-user'
            },
            {
                'title': 'Interventions',
                'path': 'admin/interventions',
                'icon': 'fas fa-hands-helping'
            },
            {
                'title': 'Seniors',
                'path': 'admin/seniors',
                'icon': 'far fa-user'
            },
            {
                'title': 'Pages publiques',
                'path': 'admin/public',
                'icon': 'fas fa-globe'
            },
            {
                'title': 'Postulations',
                'path': 'admin/postulations',
                'icon': 'fas fa-file-alt'
            },
            {
                'title': 'Formation continue',
                'path': 'admin/formations',
                'icon': 'fas fa-graduation-cap'
            },
            {
                'title': 'Suggestions',
                'path': 'admin/suggestions',
                'icon': 'far fa-lightbulb'
            },
            {
                'title': 'Comptes admin',
                'path': 'admin/comptes',
                'icon': 'fas fa-users-cog'
            }
        ];
        let dashboard = new Dashboard({
            links: links
        });
        $('#pageContent').html(dashboard.render());
    },

    juniors: function () {
        $('#pageContent').html();
    },

    seniors: function () {
        $('#pageContent').html();
    },

    interventions: function () {
        $('#pageContent').html();
    }
    ,

    formations: function () {
        $('#pageContent').html();
    }
});