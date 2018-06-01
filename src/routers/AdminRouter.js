import Backbone from "backbone";

// Templates
import dashboardTmpl from "templates/components/dashboard.handlebars";

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

    dashboard: function () {

        $('#pageContent').html();
    },

    juniors: function () {
        $('#pageContent').html();
    },

    seniors: function () {
        $('#pageContent').html();
    },

    interventions: function () {
        $('#pageContent').html();
    }
    ,

    formations: function () {
        $('#pageContent').html();
    }
});