import Backbone from "backbone";
import Dashboard from "../views/Dashboard";
import JuniorProfil from "../views/JuniorProfil";
import Junior from "../models/Junior";
import Senior from "../models/Senior";
import SeniorProfil from "../views/SeniorProfil";
import SeniorSuggestion from "../views/SeniorSuggestion";

export default Backbone.Router.extend({

    routes: {
        "seniors": "dashboard",
        "seniors/profil": "profil",
        "seniors/interventions": "interventions",
        "seniors/suggestion": "suggestion"
    },

    dashboard: function() {
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
        let senior = new Senior({prenom: "Juan",nom: "Moreno",noMTel: "0786488797"});
        let seniorSuggestion = new SeniorSuggestion({model: senior});

        $('#pageContent').html(seniorSuggestion.render());
    },

    profil: function() {
        let senior = new Senior({prenom: "Juan",nom: "Moreno",noMTel: "0786488797"});
        let seniorProfil = new SeniorProfil({model: senior});

        $('#pageContent').html(seniorProfil.render());
    },

    interventions: function() {
        $('#pageContent').html("<h1>Interventions</h1>");
    }
});