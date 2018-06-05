import Backbone from "backbone";
import Dashboard from "../views/Dashboard";
import Interventions from "../collections/Interventions";
import InterventionsList from "../views/InterventionsList";
import JuniorProfil from "../views/JuniorProfil";
import Junior from "../models/Junior";

export default Backbone.Router.extend({

    routes: {
        "juniors": "dashboard",
        "juniors/profil": "profil",
        "juniors/interventions": "interventions",
        "juniors/schema": "schema"
    },

    dashboard: function() {
        let links = [
            {
                'title': 'Mes interventions',
                'path': 'juniors/interventions',
                'icon': 'fas fa-hands-helping'
            },
            {
                'title': 'Mon profil',
                'path': 'juniors/profil',
                'icon': 'fas fa-user'
            },
            {
                'title': 'Schéma d\'intervention',
                'path': 'juniors/schema',
                'icon': 'fas fa-exchange-alt'
            }];
        let dashboard = new Dashboard({
            links: links
        });
        $('#pageContent').html(dashboard.render());
    },

    schema: function() {
        $('#pageContent').html("<h1>schema</h1>");
    },

    profil: function() {
        let junior = new Junior({prenom: "Juan",nom: "Moreno",noMobile: "0786488797"});
        let juniorProfil = new JuniorProfil({model: junior});

        $('#pageContent').html(juniorProfil.render());
    },

    interventions: function() {
        let interventions = new Interventions();
        interventions.fetch();
        let list = new InterventionsList({
            collection: interventions
        });
        $('#pageContent').html(list.render());
    }
});