import Backbone from "backbone";
import Dashboard from "../views/Dashboard";
import Interventions from "../collections/Interventions";
import InterventionsList from "../views/InterventionsList";
import JuniorProfil from "../views/JuniorProfil";
import Junior from "../models/Junior";
import JuniorSchema from "../views/JuniorSchema";
import PlagesHoraire from "../collections/PlagesHoraire";

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
        let junior = new Junior({prenom: "Juan",nom: "Moreno",noMobile: "0786488797"});
        let juniorSchema = new JuniorSchema({model: junior});

        $('#pageContent').html(juniorSchema.render());
    },

    profil: function() {

        let plagesHoraire = new PlagesHoraire({
            localStorage: "plagesHoraire"
        });
        let tabPlages = [
                    {
                        jour: "Lundi",
                        heureDebut: "10:00",
                        heureFin: "12:00"
                    },
                    {
                        jour: "Lundi",
                        heureDebut: "15:00",
                        heureFin: "17:00"
                    },
                    {
                        jour: "Mardi",
                        heureDebut: "10:00",
                        heureFin: "12:00"
                    },
                    {
                        jour: "Jeudi",
                        heureDebut: "10:00",
                        heureFin: "12:00"
                    }
                    ];
        plagesHoraire.add(tabPlages);
        let junior = new Junior({
            prenom: "Juan",
            nom: "Moreno",
            noMobile: "0786488797",
            plagesHoraire: plagesHoraire});
        console.log(junior.toJSON());
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