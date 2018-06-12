import Backbone from "backbone";

// Models
import Senior from "models/Senior";
import Interventions from "collections/Interventions";

// Views
import Dashboard from "views/components/Dashboard";
import Breadcrumbs from "views/components/Breadcrumbs";
import ProfilSenior from "views/special/ProfilSenior";
import FormSuggestion from "views/forms/FormSuggestion";
import ListInterventionsSenior from "views/lists/ListInterventionsSenior";
import FormRequete from "../views/forms/FormRequete";
import Matieres from "../collections/Matieres";


export default Backbone.Router.extend({

    routes: {
        "seniors": "dashboard",
        "seniors/profil": "profil",
        "seniors/interventions": "interventions",
        "seniors/suggestion": "suggestion",
        'seniors/demande': 'demande'

    },

    route: function(route, name, callback) {
        var router = this;
        if (!callback) callback = this[name];

        if(!true){

            return false;
        }



        var f = function() {
            console.log('route before', route);
            callback.apply(router, arguments);
            console.log('route after', route);
        };
        return Backbone.Router.prototype.route.call(this, route, name, f);
    },


    dashboard: function() {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "seniors",
                    title: "Tableau de bord"
                }
            ]
        }).render());

        let links = [
            {
                'title': 'Mes interventions',
                'path':'seniors/interventions',
                'icon': 'fas fa-hands-helping'
            },
            {
                'title': 'Mon profil',
                'path': 'seniors/profil',
                'icon': 'fas fa-user'
            },
            {
                'title': 'Faire une suggestion',
                'path': 'seniors/suggestion',
                'icon': 'fas fa-lightbulb'
            },
            {
                'title': 'Faire une requête',
                'path': 'seniors/demande',
                'icon': 'fas fa-question-circle'
            }];
        let dashboard = new Dashboard({
            links: links
        });
        $('#pageContent').html(dashboard.render());
    },

    suggestion: function(){
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "seniors",
                    title: "Tableau de bord"
                },
                {
                    target: "seniors/suggestion",
                    title: "Faire une suggestion"
                }
            ]
        }).render());
        $('#pageContent').html(new FormSuggestion().render());
    },

    profil: function() {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "seniors",
                    title: "Tableau de bord"
                },
                {
                    target: "seniors/profil",
                    title: "Profil"
                }
            ]
        }).render());



        let senior = new Senior();
        senior.fetch({
            success: function (senior) {
                $('#pageContent').html(new ProfilSenior({model: senior}).render());
            }
        });
    },

    interventions: function() {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "seniors",
                    title: "Tableau de bord"
                },
                {
                    target: "seniors/interventions",
                    title: "Interventions"
                }
            ]
        }).render());
        let interventions = new Interventions("interventions-senior");

        $('#pageContent').html(new ListInterventionsSenior({
            collection: interventions
        }).render());
    },

    demande: function () {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "seniors",
                    title: "Tableau de bord"
                },
                {
                    target: "seniors/demande",
                    title: "Demande"
                }
            ]
        }).render());

        //let matieresListe = new Matieres();
        //matieresListe.fetch();

        let matieresListe = new Matieres([{
                "id": 1,
                "nom": "Skype",
                "description": "Papy telephone maison",
                "sujet": {
                    "id": 1,
                    "nom": "Informatique",
                    "description": "Sujet #1 Description"
                }
            },
            {
                "id": 2,
                "nom": "Cueillette",
                "description": "Aller cueillir des fraises ou des champignons",
                "sujet": {
                    "id": 2,
                    "nom": "Jardinage",
                    "description": "Sujet #2 Description"
                }
            }]);


        let requete = new FormRequete({
            matieres: matieresListe,
        });

        console.log(requete);

        $('#pageContent').html(requete.render());
    }
});