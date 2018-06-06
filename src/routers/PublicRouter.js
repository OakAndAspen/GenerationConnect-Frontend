import Backbone from "backbone";

// Templates
import accueilTmpl from "templates/pages/accueil.handlebars";
import juniorsTmpl from "templates/pages/infosJuniors.handlebars";
import seniorsTmpl from "templates/pages/infosSeniors.handlebars";
import aideTmpl from "templates/pages/aide.handlebars";

// Views
import ContactForm from "views/forms/FormContact";
import ApplicationForm from "views/forms/FormPostulation";
import SubscriptionForm from "views/forms/FormSenior";
import LoginForm from "views/forms/FormLogin";

export default Backbone.Router.extend({

    routes: {
        "accueil": "accueil",
        "infosJuniors": "infosJuniors",
        "infosSeniors": "infosSeniors",
        "aide": "aide",
        "contact": "contact",
        "postuler": "postuler",
        "inscription": "inscription",
        "login": "login"
    },

    accueil: function() {
        $('#pageContent').html(accueilTmpl);
    },

    infosJuniors: function() {
        $('#pageContent').html(juniorsTmpl);
    },

    infosSeniors: function() {
        $('#pageContent').html(seniorsTmpl);
    },

    aide: function() {
        $('#pageContent').html(aideTmpl);
    },

    contact: function() {
        let contactForm = new ContactForm();
        $('#pageContent').html(contactForm.render());
    },

    postuler: function() {
        let applForm = new ApplicationForm();
        $('#pageContent').html(applForm.render());
    },

    inscription: function() {
        let subForm = new SubscriptionForm();
        $('#pageContent').html(subForm.render());
    },

    login: function() {
        let loginForm = new LoginForm();
        $('#pageContent').html(loginForm.render());
    }
});