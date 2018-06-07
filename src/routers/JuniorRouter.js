import Backbone from "backbone";

// Models
import Junior from "models/Junior";
import Interventions from "collections/Interventions";
import PlagesHoraire from "collections/PlagesHoraire";

// Views
import Dashboard from "views/components/Dashboard";
import Breadcrumbs from "views/components/Breadcrumbs";
import JuniorSchema from "views/components/Page";
import ProfilJunior from "../views/special/ProfilJunior";
import Juniors from "../collections/Juniors";
import ListInterventionsJunior from "views/lists/ListInterventionsJunior";
import SchemaTmpl from "templates/pages/schema.handlebars";


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


        $('#pageContent').html(SchemaTmpl);
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


        let junior = new Junior({"id":2,"prenom":"Gabriel","nom":"Lopez","email":"user2@example.com","telephone":"+41245577600","junior":{"status":"actif","LimiteTempsTransport":120,"NoAVS":"756.1234.5678.97","BanqueNom":"UBS Group AG","BanqueBIC":"UBSWCHZH80A","BanqueIBAN":"CH08 0029 8999 9999 9999 Q","adresse_de_depart":{"id":1,"ligne1":"Avenue des Sports 20","ligne2":"","ligne3":"","ville":"Yverdon-les-Bains","npa":1401},"adresse_de_facturation":{"id":1,"ligne1":"Avenue des Sports 20","ligne2":"","ligne3":"","ville":"Yverdon-les-Bains","npa":1401}},"adresse_habitation":{"id":1,"ligne1":"Avenue des Sports 20","ligne2":"","ligne3":"","ville":"Yverdon-les-Bains","npa":1401}});
        let juniorProfil = new ProfilJunior({model: junior});

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

        let interventions = new Interventions({LocalStorage: 'interventions'});
        interventions.fetch();
        let list = new ListInterventionsJunior({
            collection: interventions
        });
        $('#pageContent').html(list.render());
    }
});