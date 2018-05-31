import Backbone from "backbone";

// Templates
//import accueilTmpl from "templates/public/accueil.html";

// Views
//import ContactForm from "views/ContactForm";

export default Backbone.Router.extend({

    routes: {
        "admin": "dashboard",
        "admin/juniors": "juniors",
        "admin/seniors": "seniors",
        "admin/interventions": "interventions",
        "admin/formations": "formations"
    },

    dashboard: function() {
        $('#pageContent').html("<h1>Dashboard</h1>");
    },

    juniors: function() {
        $('#pageContent').html();
    },

    seniors: function() {
        $('#pageContent').html();
    },

    interventions: function() {
        $('#pageContent').html();
    },

    formations: function() {
        $('#pageContent').html();
    }
});