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

export default Backbone.Router.extend({

    routes: {
        "seniors": "dashboard",
        "seniors/profil": "profil",
        "seniors/interventions": "interventions",
        "seniors/suggestion": "suggestion"
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

        let senior = new Senior({prenom: "Juan",nom: "Moreno",noMTel: "0786488797"});
        let seniorProfil = new ProfilSenior({model: senior});

        $('#pageContent').html(seniorProfil.render());
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
    }
});