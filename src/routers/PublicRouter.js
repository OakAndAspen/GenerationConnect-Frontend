import Backbone from "backbone";
import AppConfig from "config";

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
import Forfaits from "../collections/Forfaits";

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

    route: function(route, name, callback) {
        if (!callback) callback = this[name];
        var f = function() {
            callback.apply(this, arguments);
        };
        return Backbone.Router.prototype.route.call(this, route, name, f);
    },

    accueil: function () {
        $('#pageContent').html(new Page({id:1}).render());
    },

    infosJuniors: function () {
        $('#pageContent').html(new Page({id:3}).render());
    },

    infosSeniors: function () {
        $('#pageContent').html(new Page({id:4}).render());
    },

    aide: function () {
        $('#pageContent').html(new Page({id:2}).render());
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

        let listForfaits = new Forfaits();
        listForfaits.fetch({
            success: function (listForfaits) {
                let form = new FormSenior({
                    forfaits: listForfaits,
                });
                $('#pageContent').html(form.render());
            }
        });
    },

    login: function () {
        let form = new FormLogin();
        $('#pageContent').html(form.render());
    }
});