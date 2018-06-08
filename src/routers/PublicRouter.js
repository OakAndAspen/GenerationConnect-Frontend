import Backbone from "backbone";

// Templates
import accueilTmpl from "templates/pages/accueil.handlebars";
import juniorsTmpl from "templates/pages/infosJuniors.handlebars";
import seniorsTmpl from "templates/pages/infosSeniors.handlebars";
import aideTmpl from "templates/pages/aide.handlebars";

// Views
import Page from "views/components/Page";
import FormContact from "views/forms/FormContact";
import FormPostulation from "views/forms/FormPostulation";
import FormSenior from "views/forms/FormSenior";
import FormLogin from "views/forms/FormLogin";

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

    accueil: function () {
        $('#pageContent').html(accueilTmpl);
    },

    infosJuniors: function () {
        $('#pageContent').html(juniorsTmpl);
    },

    infosSeniors: function () {
        $('#pageContent').html(seniorsTmpl);
    },

    aide: function () {
        $('#pageContent').html(aideTmpl);
    },

    contact: function () {
        let form = new FormContact();
        $('#pageContent').html(form.render());
    },

    postuler: function () {
        let form = new FormPostulation();
        $('#pageContent').html(form.render());
    },

    inscription: function () {
        let form = new FormSenior();
        $('#pageContent').html(form.render());
    },

    login: function () {
        let form = new FormLogin({
            app: this.app
        });
        $('#pageContent').html(form.render());
    }
});