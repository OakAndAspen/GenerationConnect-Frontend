import Backbone from "backbone";

// Models
import Junior from "models/Junior";
import Interventions from "collections/Interventions";
import PlagesHoraire from "collections/PlagesHoraire";

// Views
import Dashboard from "views/components/Dashboard";
import InterventionsList from "views/lists/ListInterventions";
import JuniorProfil from "views/special/JuniorProfil";
import Breadcrumbs from "views/components/Breadcrumbs";
import JuniorSchema from "views/components/Page";


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

        let junior = new Junior();
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

        //--------------------------------------

        let junior = new Junior({
            "id": 123,
            "prenom": "juan",
            "nom": "moreno",
            "telephone": 786488797,
            "email": "j.j.moreno994@gmail.com",
            "adresseHabitation": {
                "id": 122,
                "ligne1": "Rue Orient Ville 10",
                "ligne2": "",
                "ligne3": "",
                "ville": "Lausanne",
                "pays": "Suisse",
                "npa": 1005
            },
            "limitetempstransport": 60,
            "status": "engagé",
            "adresseDepart": {
                "id": 122,
                "ligne1": "Rue Louis Curttat 24",
                "ligne2": "",
                "ligne3": "",
                "ville": "Lausanne",
                "pays": "Suisse",
                "npa": 1005
            },
            "adresseFacturation": {
                "id": 122,
                "ligne1": "Avenue de Morges 13",
                "ligne2": "",
                "ligne3": "",
                "ville": "Lausanne",
                "pays": "Suisse",
                "npa": 1005
            },
            "noAVS": 745348611564224,
            "banqueNom": "BCV",
            "banqueBIC": 456,
            "banqueIBAN": "CH435523825252645",
            "matieres": [

            ],
            "plagesHoraire": [

            ]
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
        let list = new ListInterventions({
            collection: interventions
        });
        $('#pageContent').html(list.render());
    }
});