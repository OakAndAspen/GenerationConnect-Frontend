import Backbone from "backbone";

// Collections
import Juniors from "collections/Juniors";
import Seniors from "collections/Seniors";
import Interventions from "collections/Interventions";
import Formations from "collections/Formations";
import Comptes from "collections/Employes";
import Suggestions from "collections/Suggestions";
import Requetes from "collections/Requetes";

// Components
import Dashboard from "views/components/Dashboard";
import Breadcrumbs from "views/components/Breadcrumbs";

// Lists
import ListJuniors from "views/lists/ListJuniors";
import ListSeniors from "views/lists/ListSeniors";
import ListInterventions from "views/lists/ListInterventions";
import ListFormations from "views/lists/ListFormations";
import ListComptes from "views/lists/ListEmployes";
import ListSuggestions from "views/lists/ListSuggestions";
import ListRequetes from "views/lists/ListRequetes";

// Forms
import FormSenior from "views/forms/FormSenior";
import FormRequete from "views/forms/FormRequete";
import FormFormation from "views/forms/FormFormation";
import FormSuggestion from "views/forms/FormSuggestion";
import FormCompte from "views/forms/FormEmploye";

// Details
import DetailJunior from "views/details/DetailJunior";
import DetailIntervention from "views/details/DetailIntervention";
import DetailSenior from "views/details/DetailSenior";
import DetailFormation from "views/details/DetailFormation";
import DetailCompte from "views/details/DetailEmploye";
import DetailRequete from "views/details/DetailRequete";

// Special
import PagesWYSIWYG from "views/special/PagesWYSIWYG";
import Senior from "../models/Senior";
import Intervention from "../models/Intervention";
import Requete from "../models/Requete";
import Formation from "../models/Formation";
import Employe from "../models/Employe";
import DetailEmploye from "../views/details/DetailEmploye";
import Junior from "../models/Junior";

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
        "admin/comptes": "comptes",
        "admin/comptes/new": "comptesNew",
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
                    target: "admin/juniors/" + id,
                    title: "N° " + id
                }
            ]
        }).render());

        /*let model = new Junior({id: id});
        model.fetch({
            success: function (model) {
                $('#pageContent').html(new DetailJunior({model: model}).render());
            }
        });*/

        let model = new Junior({
            "id": 2,
            "prenom": "Gabriel",
            "nom": "Lopez",
            "email": "user2@example.com",
            "telephone": "+41245577600",
            "junior": {
                "status": "actif",
                "LimiteTempsTransport": 120,
                "NoAVS": "756.1234.5678.97",
                "BanqueNom": "UBS Group AG",
                "BanqueBIC": "UBSWCHZH80A",
                "BanqueIBAN": "CH08 0029 8999 9999 9999 Q",
                "adresse_de_depart": {
                    "id": 1,
                    "ligne1": "Avenue des Sports 20",
                    "ligne2": "",
                    "ligne3": "",
                    "ville": "Yverdon-les-Bains",
                    "npa": 1401
                },
                "adresse_de_facturation": {
                    "id": 1,
                    "ligne1": "Avenue des Sports 20",
                    "ligne2": "",
                    "ligne3": "",
                    "ville": "Yverdon-les-Bains",
                    "npa": 1401
                },
                "matieres": [
                    {
                        "id": 1,
                        "nom": "Skype",
                        "description": "Papy telephone maison",
                        "sujet_id": 1,
                        "pivot": {
                            "junior_user_id": 2,
                            "matiere_id": 1
                        }
                    },
                    {
                        "id": 2,
                        "nom": "Cueillette",
                        "description": "Aller cueillir des fraises ou des champignons",
                        "sujet_id": 2,
                        "pivot": {
                            "junior_user_id": 2,
                            "matiere_id": 2
                        }
                    }
                ]
            },
            "adresse_habitation": {
                "id": 1,
                "ligne1": "Avenue des Sports 20",
                "ligne2": "",
                "ligne3": "",
                "ville": "Yverdon-les-Bains",
                "npa": 1401
            }
        });
        $('#pageContent').html(new DetailJunior({model: model}).render());
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
        collection.fetch();

        let list = new ListSeniors({
            collection: collection,
        });
        $('#pageContent').html(list.render());
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
            success: function (model) {
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

        let collection = new Interventions({
            localStorage: "interventions"
        });
        collection.fetch();

        let list = new ListInterventions({
            collection: collection,
        });
        $('#pageContent').html(list.render());
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
            success: function (model) {
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

        let collection = new Requetes({
            localStorage: "requetes"
        });
        collection.fetch();

        let list = new ListRequetes({
            collection: collection,
        });
        $('#pageContent').html(list.render());
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
                    target: "admin/demandes/1",
                    title: "N°983576"
                }
            ]
        }).render());

        let model = new Requete({id: id});
        model.fetch({
            success: function (model) {
                $('#pageContent').html(new DetailRequete({model: model}).render());
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
        collection.fetch();

        let list = new ListFormations({
            collection: collection,
        });
        $('#pageContent').html(list.render());
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
            success: function (model) {
                $('#pageContent').html(new DetailFormation({model: model}).render());
            }
        });

        $('#pageContent').html(new DetailFormation({model: model}).render());
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

        let collection = new Suggestions({
            localStorage: "suggestions"
        });
        collection.fetch();
        let list = new ListSuggestions({
            collection: collection,
        });
        $('#pageContent').html(list.render());
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

    compte: function (id) {
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

        let model = new Employe({id: id});
        model.fetch({
            success: function (model) {
                $('#pageContent').html(new DetailEmploye({model: model}).render());
            }
        });
    },

    comptesNew: function () {
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
        $('#pageContent').html(new FormCompte().render());
    },
});