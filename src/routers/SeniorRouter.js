import Backbone from "backbone";

export default Backbone.Router.extend({

    routes: {
        "seniors": "dashboard",
        "seniors/profil": "profil",
        "seniors/interventions": "interventions"
    },

    dashboard: function() {
        $('#pageContent').html("<h1>Dashboard</h1>");
    },

    profil: function() {
        $('#pageContent').html("<h1>Profil</h1>");
    },

    interventions: function() {
        $('#pageContent').html("<h1>Interventions</h1>");
    }
});