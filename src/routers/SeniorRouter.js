import Backbone from "backbone";

// Models
import Junior from "models/Junior";
import Senior from "models/Senior";

// Views
import Dashboard from "views/Dashboard";
import JuniorProfil from "views/JuniorProfil";
import SeniorProfil from "views/SeniorProfil";
import SeniorSuggestion from "views/SeniorSuggestion";
import Breadcrumbs from "views/Breadcrumbs";

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
        let senior = new Senior({prenom: "Juan",nom: "Moreno",noMTel: "0786488797"});
        let seniorSuggestion = new SeniorSuggestion({model: senior});

        $('#pageContent').html(seniorSuggestion.render());
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
        let seniorProfil = new SeniorProfil({model: senior});

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
        $('#pageContent').html("<h1>Interventions</h1>");
    }
});