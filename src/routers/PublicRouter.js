import Backbone from "backbone";

// Templates
import accueilTmpl from "templates/public/accueil.html";
import juniorsTmpl from "templates/public/juniors.html";
import seniorsTmpl from "templates/public/seniors.html";
import aideTmpl from "templates/public/aide.html";

// Views
import ContactForm from "views/ContactForm";
import ApplicationForm from "views/ApplicationForm";
import SubscriptionForm from "views/SubscriptionForm";
import LoginForm from "views/LoginForm";

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