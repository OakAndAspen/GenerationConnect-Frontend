import Backbone from "backbone";

// Templates
import accueilTmpl from "templates/pages/public/accueil.handlebars";
import juniorsTmpl from "templates/pages/public/juniors.handlebars";
import seniorsTmpl from "templates/pages/public/seniors.handlebars";
import aideTmpl from "templates/pages/public/aide.handlebars";

// Views
import ContactForm from "views/ContactForm";
import ApplicationForm from "views/ApplicationForm";
import SubscriptionForm from "views/SubscriptionForm";
import LoginForm from "views/LoginForm";

// Images
import imgOffres from "images/offres.png";

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
        let imgOffres = new Image();
        imgOffres.src = imgOffres;
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