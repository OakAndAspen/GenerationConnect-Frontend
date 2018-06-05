import Backbone from "backbone";

// Models
import Junior from "../models/Junior";
import Interventions from "collections/Interventions";
import PlagesHoraire from "collections/PlagesHoraire";

// Views
import Dashboard from "views/Dashboard";
import InterventionsList from "views/InterventionsList";
import JuniorProfil from "views/JuniorProfil";
import Breadcrumbs from "views/Breadcrumbs";
import JuniorSchema from "views/JuniorSchema";


export default Backbone.Router.extend({

    routes: {
        "juniors": "dashboard",
        "juniors/profil": "profil",
        "juniors/interventions": "interventions",
        "juniors/schema": "schema"
    },

    dashboard: function() {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "juniors",
                    title: "Tableau de bord"
                }
            ]
        }).render());

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
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "juniors",
                    title: "Tableau de bord"
                },
                {
                    target: "juniors/schema",
                    title: "Schéma d'intervention"
                }
            ]
        }).render());

        let junior = new Junior({prenom: "Juan",nom: "Moreno",noMobile: "0786488797"});
        let juniorSchema = new JuniorSchema({model: junior});

        $('#pageContent').html(juniorSchema.render());
    },

    profil: function() {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "juniors",
                    title: "Tableau de bord"
                },
                {
                    target: "juniors/profil",
                    title: "Profil"
                }
            ]
        }).render());

        let plagesHoraire = new PlagesHoraire({
            localStorage: 'plagesHoraire'
        });

        plagesHoraire.create({
            jour: "Lundi",
            heureDebut: "15:00",
            heureFin: "17:00"
        });
        plagesHoraire.create({
            jour: "Mardi",
            heureDebut: "10:00",
            heureFin: "12:00"
        });
        plagesHoraire.fetch();
        let junior = new Junior({
            prenom: "Juan",
            nom: "Moreno",
            noMobile: "0786488797",
            plagesHoraire: plagesHoraire
        });

        let juniorProfil = new JuniorProfil({model: junior});

        $('#pageContent').html(juniorProfil.render());
    },

    interventions: function() {
        $('#pageBreadcrumbs').html(new Breadcrumbs({
            links: [
                {
                    target: "juniors",
                    title: "Tableau de bord"
                },
                {
                    target: "juniors/interventions",
                    title: "Interventions"
                }
            ]
        }).render());

        let interventions = new Interventions();
        interventions.fetch();
        let list = new InterventionsList({
            collection: interventions
        });
        $('#pageContent').html(list.render());
    }
});