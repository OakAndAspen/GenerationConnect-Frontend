import Backbone from "backbone";

// Components
import Dashboard from "views/components/Dashboard";
import Breadcrumbs from "views/components/Breadcrumbs";

// Models
import Junior from "models/Junior";
import Senior from "models/Senior";
import Intervention from "models/Intervention";
import Requete from "models/Requete";
import Formation from "models/Formation";
import Employe from "models/Employe";

// Collections
import Juniors from "collections/Juniors";
import Seniors from "collections/Seniors";
import Interventions from "collections/Interventions";
import Formations from "collections/Formations";
import Employes from "collections/Employes";
import Suggestions from "collections/Suggestions";
import Requetes from "collections/Requetes";

// Lists
import ListJuniors from "views/lists/ListJuniors";
import ListSeniors from "views/lists/ListSeniors";
import ListInterventions from "views/lists/ListInterventions";
import ListFormations from "views/lists/ListFormations";
import ListEmployes from "views/lists/ListEmployes";
import ListSuggestions from "views/lists/ListSuggestions";
import ListRequetes from "views/lists/ListRequetes";

// Forms
import FormSenior from "views/forms/FormSenior";
import FormRequete from "views/forms/FormRequete";
import FormFormation from "views/forms/FormFormation";
import FormSuggestion from "views/forms/FormSuggestion";
import FormEmploye from "views/forms/FormEmploye";

// Details
import DetailJunior from "views/details/DetailJunior";
import DetailIntervention from "views/details/DetailIntervention";
import DetailSenior from "views/details/DetailSenior";
import DetailFormation from "views/details/DetailFormation";
import DetailEmploye from "views/details/DetailEmploye";
import DetailRequete from "views/details/DetailRequete";

// Special
import PagesWYSIWYG from "views/special/PagesWYSIWYG";
import AppConfig from "config";

export default Backbone.Router.extend({

    routes: {
        "admin": "dashboard",
        "admin/juniors": "juniors",
        "admin/juniors/:id": "junior",
        "admin/seniors": "seniors",
        "admin/seniors/new": "seniorsNew",
        "admin/seniors/:id": "senior",
        "admin/interventions": "interventions",
        "admin/interventions/:id": "intervention",
        "admin/demandes": "demandes",
        "admin/demandes/new": "demandesNew",
        "admin/demandes/:id": "demande",
        "admin/formations": "formations",
        "admin/formations/new": "formationsNew",
        "admin/formations/:id": "formation",
        "admin/pages": "pages",
        "admin/suggestions": "suggestions",
        "admin/suggestions/new": "suggestionsNew",
        "admin/comptes": "employes",
        "admin/comptes/new": "employesNew",
        "admin/comptes/:id": "employe"
    },

    route: function (route, name, callback) {
        if (!callback) callback = this[name];
        let userType = localStorage.getItem('userType');
        if (!userType || userType != 'employe') {
            console.log("Tu es un " + userType + "! Tu n'as pas accès à cet endroit du site, petit coquin.");
            return false;
        }
        var f = function () {
            console.log(location.hash);
            callback.apply(this, arguments);
        };
        return Backbone.Router.prototype.route.call(this, route, name, f);
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
                'title': 'Seniors',
                'path': 'admin/seniors',
                'icon': 'far fa-user'
            },
            {
                'title': 'Demandes',
                'path': 'admin/demandes',
                'icon': 'fas fa-file-alt'
            },
            {
                'title': 'Interventions',
                'path': 'admin/interventions',
                'icon': 'fas fa-hands-helping'
            },
            {
                'title': 'Juniors',
                'path': 'admin/juniors',
                'icon': 'fas fa-user'
            },
            {
                'title': 'Formation continue',
                'path': 'admin/formations',
                'icon': 'fas fa-graduation-cap'
            },
            {
                'title': 'Comptes admin',
                'path': 'admin/comptes',
                'icon': 'fas fa-users-cog'
            },
            {
                'title': 'Pages éditables',
                'path': 'admin/pages',
                'icon': 'fas fa-globe'
            },
            {
                'title': 'Suggestions',
                'path': 'admin/suggestions',
                'icon': 'far fa-lightbulb'
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
        collection.fetch({
            success: function () {
                console.log(collection.toJSON());
                let list = new ListJuniors({collection: collection});
                $('#pageContent').html(list.render());
            }
        });
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
                    target: "admin/juniors/" + id,
                    title: "N° " + id
                }
            ]
        }).render());

        let model = new Junior({id: id});
        model.fetch({
            success: function (model) {
                $('#pageContent').html(new DetailJunior({model: model}).render());
            }
        });
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

        let collection = new Seniors();
        collection.fetch({
            success: function () {
                console.log(collection.toJSON());
                let list = new ListSeniors({collection: collection});
                $('#pageContent').html(list.render());
            }
        });
    },

    senior: function (id) {
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
                    target: "admin/seniors/" + id,
                    title: "N° " + id
                }
            ]
        }).render());

        let model = new Senior({id: id});
        model.fetch({
            success: function () {
                $('#pageContent').html(new DetailSenior({model: model}).render());
            }
        });
    },

    seniorsNew: function () {
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
                    target: "admin/seniors/new",
                    title: "Nouveau Senior"
                }
            ]
        }).render());
        $('#pageContent').html(new FormSenior().render());
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

        let collection = new Interventions();
        collection.fetch({
            success: function () {
                let list = new ListInterventions({collection: collection});
                $('#pageContent').html(list.render());
            }
        });
    },

    intervention: function (id) {
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
                    target: "admin/interventions/" + id,
                    title: "N° " + id
                }
            ]
        }).render());

        let model = new Intervention({id: id});
        model.fetch({
            success: function () {
                $('#pageContent').html(new DetailIntervention({model: model}).render());
            }
        });
    },

    demandes: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/demandes",
                    title: "Demandes"
                }
            ]
        }).render());

        let collection = new Requetes();
        collection.fetch({
            success: function () {
                let list = new ListRequetes({collection: collection});
                $('#pageContent').html(list.render());
            }
        });
    },

    demande: function (id) {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/demandes",
                    title: "Demandes"
                },
                {
                    target: "admin/demandes/"+id,
                    title: "N° "+id
                }
            ]
        }).render());

        let model = new Requete({id: id});
        model.fetch({
            success: function (model) {
                $.ajax({
                    type: "GET",
                    url: AppConfig.apiUrl+"/matching/"+id,
                    success: function (data) {
                        $('#pageContent').html(new DetailRequete({model: model, matching:data}).render());
                    }
                });
            }
        });
    },

    demandesNew: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/demandes",
                    title: "Demandes"
                },
                {
                    target: "admin/demandes/new",
                    title: "Nouvelle demande"
                }
            ]
        }).render());
        $('#pageContent').html(new FormRequete().render());
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

        let collection = new Formations();
        collection.fetch({
            success: function () {
                let list = new ListFormations({collection: collection});
                $('#pageContent').html(list.render());
            }
        });
    },

    formation: function (id) {
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
                    title: "N° " + id
                }
            ]
        }).render());

        let model = new Formation({id: id});
        model.fetch({
            success: function () {
                $('#pageContent').html(new DetailFormation({model: model}).render());
            }
        });
    },

    formationsNew: function () {
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
                    target: "admin/formations/new",
                    title: "Nouvelle formation"
                }
            ]
        }).render());
        $('#pageContent').html(new FormFormation().render());
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

        let collection = new Suggestions();
        collection.fetch({
            success: function () {
                console.log(collection.toJSON());
                let list = new ListSuggestions({collection: collection});
                $('#pageContent').html(list.render());
            }
        });
    },

    suggestionsNew: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/suggestions",
                    title: "Suggestions"
                },
                {
                    target: "admin/suggestions/new",
                    title: "Nouvelle suggestion"
                }
            ]
        }).render());
        $('#pageContent').html(new FormSuggestion().render());
    },

    employes: function () {
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

        let collection = new Employes();
        collection.fetch({
            success: function () {
                console.log(collection.toJSON());
                let list = new ListEmployes({collection: collection});
                $('#pageContent').html(list.render());
            }
        });
    },

    employe: function (id) {
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
                    title: "N° "+id
                }
            ]
        }).render());

        let model = new Employe({id: id});
        model.fetch({
            success: function () {
                $('#pageContent').html(new DetailEmploye({model: model}).render());
            }
        });
    },

    employesNew: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "admin",
                    title: "Tableau de bord"
                },
                {
                    target: "admin/comptes",
                    title: "Comptes"
                },
                {
                    target: "admin/comptes/new",
                    title: "Nouveau compte"
                }
            ]
        }).render());
        $('#pageContent').html(new FormEmploye().render());
    },
});