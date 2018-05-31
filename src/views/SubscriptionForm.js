import Backbone from "backbone";
import subFormTmpl from "templates/public/subscriptionForm.html";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = subFormTmpl;
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    },

    events: {
        'click #send': 'send'
    },

    send: function (event) {
        console.log("Envoyer l'inscription");
    }

});