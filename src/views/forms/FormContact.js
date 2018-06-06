import Backbone from "backbone";
import contactFormTmpl from "templates/forms/FormContact.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = contactFormTmpl;
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    },

    events: {
        'click #send': 'send'
    },

    send: function (event) {
        console.log("Envoyer un email");
    }

});