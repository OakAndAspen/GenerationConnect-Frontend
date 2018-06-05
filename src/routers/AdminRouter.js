import Backbone from "backbone";

// Collections
import Juniors from "collections/Juniors";
import Seniors from "collections/Seniors";

// Views
import Dashboard from "views/Dashboard";
import JuniorsList from "views/JuniorsList";
import SeniorsList from "views/SeniorsList";

export default Backbone.Router.extend({

    routes: {
        "admin": "dashboard",
        "admin/juniors": "juniors",
        "admin/juniors/:id": "junior",
        "admin/seniors": "seniors",
        "admin/seniors/:id": "senior",
        "admin/interventions": "interventions",
        "admin/interventions/:id": "intervention",
        "admin/formations": "formations",
        "admin/formations/:id": "formation",
        "admin/pages": "pages",
        "admin/suggestions": "suggestions",
        "admin/postulations": "postulations",
        "admin/postulations/:id": "postulation",
        "admin/comptes": "comptes",
        "admin/comptes/:id": "compte"
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
                'title': 'Pages éditables',
                'path': 'admin/pages',
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
        let juniors = new Juniors("juniors");
        juniors.fetch();
        let list = new JuniorsList({
            collection: juniors
        });
        $('#pageContent').html(list.render());
    },

    junior: function () {
        $('#pageContent').html("<h1>Junior</h1>");
    },

    seniors: function () {
        let seniors = new Seniors("seniors");
        seniors.fetch();
        let list = new SeniorsList({
            collection: seniors
        });
        $('#pageContent').html(list.render());
    },

    senior: function () {
        $('#pageContent').html("<h1>Senior</h1>");
    },

    interventions: function () {
        $('#pageContent').html("<h1>Interventions</h1>");
    },

    intervention: function () {
        $('#pageContent').html("<h1>Intervention</h1>");
    },

    formations: function () {
        $('#pageContent').html("<h1>Formations</h1>");
    },

    formation: function () {
        $('#pageContent').html("<h1>Formation</h1>");
    },

    pages: function () {
        $('#pageContent').html("<h1>Pages</h1>");
    },

    suggestions: function () {
        $('#pageContent').html("<h1>Suggestions</h1>");
    },

    postulations: function () {
        $('#pageContent').html("<h1>Postulations</h1>");
    },

    postulation: function () {
        $('#pageContent').html("<h1>Postulation</h1>");
    },

    comptes: function () {
        $('#pageContent').html("<h1>Comptes</h1>");
    },

    compte: function () {
        $('#pageContent').html("<h1>Compte</h1>");
    }
});