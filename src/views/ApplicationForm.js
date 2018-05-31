import Backbone from "backbone";
import applFormTmpl from "templates/public/applicationForm.html";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = applFormTmpl;
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    },

    events: {
        'click #send': 'send'
    },

    send: function (event) {
        console.log("Envoyer la postulation");
    }

});