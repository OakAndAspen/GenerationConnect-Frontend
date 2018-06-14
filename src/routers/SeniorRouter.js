import Backbone from "backbone";

// Models
import Senior from "models/Senior";
import Interventions from "collections/Interventions";
import Sujets from "collections/Sujets";

// Views
import Dashboard from "views/components/Dashboard";
import Breadcrumbs from "views/components/Breadcrumbs";
import ProfilSenior from "views/special/ProfilSenior";
import FormSuggestion from "views/forms/FormSuggestion";
import ListInterventionsSenior from "views/lists/ListInterventionsSenior";
import FormRequete from "views/forms/FormRequete";

export default Backbone.Router.extend({

    routes: {
        "seniors": "dashboard",
        "seniors/profil": "profil",
        "seniors/interventions": "interventions",
        "seniors/suggestion": "suggestion",
        "seniors/demande": "demande",
        "seniors/interventions/:id": "intervention"
    },

    route: function (route, name, callback) {
        if (!callback) callback = this[name];
        let userType = localStorage.getItem('userType');
        if (!userType || userType != 'senior') {
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
                'path': 'seniors/profil',
                'icon': 'fas fa-user'
            },
            {
                'title': 'Mes interventions',
                'path': 'seniors/interventions',
                'icon': 'fas fa-hands-helping'
            },
            {
                'title': 'Faire une demande',
                'path': 'seniors/demande',
                'icon': 'fas fa-question-circle'
            },
            {
                'title': 'Faire une suggestion',
                'path': 'seniors/suggestion',
                'icon': 'fas fa-lightbulb'
            }
        ];
        let dashboard = new Dashboard({
            links: links
        });
        $('#pageContent').html(dashboard.render());
    },

    suggestion: function () {
        $('#pageContent').html(new FormSuggestion().render());
    },

    profil: function () {
        let userId = localStorage.getItem('userID');
        let senior = new Senior({id: userId});
        senior.fetch({
            success: function (senior) {
                $('#pageContent').html(new ProfilSenior({model: senior}).render());
            }
        });
    },

    interventions: function () {
        let interventions = new Interventions("interventions-senior");
        $('#pageContent').html(new ListInterventionsSenior({
            collection: interventions
        }).render());
    },

    demande: function () {
        let sujetsListe = new Sujets();
        sujetsListe.fetch({
            success: function (sujetsListe) {
                let requete = new FormRequete({
                    sujets: sujetsListe,
                });

                $('#pageContent').html(requete.render());
            }
        });
    },

    intervention: function (id) {
        let interventions = new Interventions();
        $('#pageContent').html(new ListInterventionsSenior({
            collection: interventions
        }).render());
    }
});