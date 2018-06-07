import Backbone from "backbone";

// Collections
import Juniors from "collections/Juniors";
import Seniors from "collections/Seniors";
import Interventions from "collections/Interventions";
import Formations from "collections/Formations";
import Comptes from "collections/Comptes";
import Suggestions from "collections/Suggestions";

// Views
import Dashboard from "views/components/Dashboard";
import Breadcrumbs from "views/components/Breadcrumbs";

import ListJuniors from "views/lists/ListJuniors";
import ListSeniors from "views/lists/ListSeniors";
import ListInterventions from "views/lists/ListInterventions";
import ListFormations from "views/lists/ListFormations";
import ListComptes from "views/lists/ListComptes";
import ListSuggestions from "views/lists/ListSuggestions";

import PagesWYSIWYG from "views/special/PagesWYSIWYG";

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

        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                }
            ]
        }).render());

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
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/juniors",
                    title: "Juniors"
                }
            ]
        }).render());

        let collection = new Juniors();
        collection.fetch();
        let list = new ListJuniors({
            collection: collection,
        });
        $('#pageContent').html(list.render());

    },

    junior: function (id) {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/juniors",
                    title: "Juniors"
                },
                {
                    target: "admin/juniors/1",
                    title: "Jean Martin"
                }
            ]
        }).render());

        $('#pageContent').html(juniorTmpl);
    },

    seniors: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/seniors",
                    title: "Seniors"
                }
            ]
        }).render());

        let collection = new Seniors({
            localStorage: "seniors"
        });
        collection.fetch();

        collection.create({
            id: 4,
            nom: "Charlot",
            prenom: "Marc-Henri",
            email: "charlot.mh@gmail.com",
            telephone: "078 456 34 34",
            statut: "actif"
        });

        collection.create({
            id: 6,
            nom: "Hemin",
            prenom: "Juliette",
            email: "jhemin@gmail.com",
            telephone: "076 446 34 00",
            statut: "en cours de traitement"
        });

        let list = new ListSeniors({
            collection: collection,
        });
        $('#pageContent').html(list.render());
    },

    senior: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/seniors",
                    title: "Seniors"
                },
                {
                    target: "admin/seniors/1",
                    title: "Jean Martin"
                }
            ]
        }).render());
    },

    interventions: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/interventions",
                    title: "Interventions"
                }
            ]
        }).render());

        let collection = new Interventions({
            localStorage: "interventions"
        });
        collection.fetch();

        let list = new ListInterventions({
            collection: collection,
        });
        $('#pageContent').html(list.render());
    },

    intervention: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/interventions",
                    title: "Interventions"
                },
                {
                    target: "admin/interventions/1",
                    title: "N° 237668"
                }
            ]
        }).render());
    },

    formations: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/formations",
                    title: "Formations"
                }
            ]
        }).render());

        let collection = new Formations({
            localStorage: "formations"
        });
        collection.fetch();

        let list = new ListFormations({
            collection: collection,
        });
        $('#pageContent').html(list.render());
    },

    formation: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/formations",
                    title: "Formations"
                },
                {
                    target: "admin/formations/1",
                    title: "N°272859"
                }
            ]
        }).render());
        $('#pageContent').html("<h1>Formation</h1>");
    },

    pages: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/pages",
                    title: "Pages"
                }
            ]
        }).render());
        $('#pageContent').html(new PagesWYSIWYG().render());
    },

    suggestions: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/suggestions",
                    title: "Suggestions"
                }
            ]
        }).render());

        let collection = new Suggestions({
            localStorage: "suggestions"
        });
        collection.fetch();
        let list = new ListSuggestions({
            collection: collection,
        });
        $('#pageContent').html(list.render());
    },

    postulations: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/postulations",
                    title: "Postulations"
                }
            ]
        }).render());

        let collection = new Juniors({
            localStorage: "postulations"
        });
        collection.fetch();

        let list = new ListJuniors({
            collection: collection,
        });
        $('#pageContent').html(list.render());
    },

    postulation: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/postulations",
                    title: "Postulations"
                },
                {
                    target: "admin/postulations/1",
                    title: "Jean Martin"
                }
            ]
        }).render());
        $('#pageContent').html("<h1>Postulation</h1>");
    },

    comptes: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/comptes",
                    title: "Comptes admin"
                }
            ]
        }).render());

        let collection = new Comptes({
            localStorage: "comptes"
        });
        collection.fetch();

        let list = new ListComptes({
            collection: collection,
        });
        $('#pageContent').html(list.render());
    },

    compte: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/comptes",
                    title: "Comptes admin"
                },
                {
                    target: "admin/comptes/1",
                    title: "Jean Martin"
                }
            ]
        }).render());
        $('#pageContent').html("<h1>Compte</h1>");
    }
});