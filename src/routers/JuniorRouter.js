import Backbone from "backbone";

// Models
import Junior from "models/Junior";
import Intervention from "models/Intervention";
import Interventions from "collections/Interventions";
import Requetes from "collections/Requetes";

// Views
import Dashboard from "views/components/Dashboard";
import JuniorSchema from "views/components/Page";
import ProfilJunior from "views/special/ProfilJunior";
import ListInterventionsJunior from "views/lists/ListInterventionsJunior";
import DetailInterventionJunior from "views/details/DetailInterventionJunior";

// Templates
import Page from "views/components/Page";

export default Backbone.Router.extend({

    routes: {
        "juniors": "dashboard",
        "juniors/profil": "profil",
        "juniors/interventions": "interventions",
        "juniors/interventions/:id": "intervention",
        "juniors/schema": "schema"
    },

    route: function (route, name, callback) {
        if (!callback) callback = this[name];
        let userType = localStorage.getItem('userType');
        if (!userType || userType != 'junior') {
            return false;
        }
        var f = function () {
            callback.apply(this, arguments);
        };
        return Backbone.Router.prototype.route.call(this, route, name, f);
    },

    dashboard: function () {
        let links = [
            {
                'title': 'Mon profil',
                'path': 'juniors/profil',
                'icon': 'fas fa-user'
            },
            {
                'title': 'Mes interventions',
                'path': 'juniors/interventions',
                'icon': 'fas fa-hands-helping'
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
        $('#pageContent').html(new Page({id:5}).render());
    },

    profil: function () {
        let junior = new Junior({
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
        let juniorProfil = new ProfilJunior({model: junior});

        $('#pageContent').html(juniorProfil.render());
    },

    interventions: function() {
        // INTERVENTIONS
        let interventionslist = new Interventions();
        interventionslist.fetch({
            success: function (interventionslist) {
                console.log(JSON.stringify(interventionslist));

                // FUTURES ET PASSEES
                let interventionsFinalisee = interventionslist.where({statut: "finalise"});
                let interventionsPlanifiees = interventionslist.where({statut: "planifie"});
                console.log(interventionsFinalisee);
                console.log(interventionsPlanifiees);

                // DEMANDES
                let demandes = new Requetes();
                demandes.fetch({
                    success: function (demandes) {

                        console.log(demandes);
                        let demandesNaN = demandes.where({statut: "envoye"});
                        //let demandesNaN = demandes.filter( element => element.statut ="envoye");
                        console.log("Demandes:");
                        console.log(demandes);
                        console.log(demandesNaN);

                        // RENDER VIEW
                        let list = new ListInterventionsJunior({
                            interventionsFutures: interventionsPlanifiees,
                            interventionsPassees: interventionsFinalisee,
                            demandes: demandesNaN,
                        });
                        $('#pageContent').html(list.render());
                    }
                });
            }
        });

        /*let interventionsFutures = new Interventions();
        interventionsFutures.fetch();
        let interventionsPassees = new Interventions();
        interventionsPassees.fetch();
        let demandes = new Requetes();
        demandes.fetch();

       *let list = new ListInterventionsJunior({
            interventionsFutures: interventionsFutures,
            interventionsPassees: interventionsPassees,
            demandes: demandes
        });
        $('#pageContent').html(list.render());*/
    },

    intervention: function(id) {
        let model = new Intervention({id: id});
        model.fetch({
            success: function (model) {
                $('#pageContent').html(new DetailInterventionJunior({model: model}).render());
            }
        });
    }
});