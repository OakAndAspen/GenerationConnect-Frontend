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
import Page from "../views/components/Page";
import Senior from "../models/Senior";
import ProfilSenior from "../views/special/ProfilSenior";
import Soumissions from "../collections/Soumissions";

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

        let userId = localStorage.getItem('userID');
        let junior = new Junior({id: userId});
        junior.fetch({
            success: function (junior) {
                $('#pageContent').html(new ProfilJunior({model: junior}).render());
            }
        });
    },

    interventions: function() {
        // INTERVENTIONS
        let interventionslist = new Interventions();
        interventionslist.fetch({
            success: function (interventionslist) {
                //console.log(JSON.stringify(interventionslist));

                // FUTURES ET PASSEES
                let interventionsFinalisee = interventionslist.where({statut: "finalise"});
                let interventionsPlanifiees = interventionslist.where({statut: "planifie"});
                //console.log(interventionsFinalisee);
                //console.log(interventionsPlanifiees);

                // DEMANDES
                let demandes = new Soumissions();
                demandes.fetch({
                    success: function (demandes) {

                        // RENDER VIEW
                        let list = new ListInterventionsJunior({
                            interventionsFutures: interventionsPlanifiees,
                            interventionsPassees: interventionsFinalisee,
                            demandes: demandes,
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