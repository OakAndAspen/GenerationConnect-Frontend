import Backbone from "backbone";
import loginFormTmpl from "templates/public/loginForm.html";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = loginFormTmpl;
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    },

    events: {
        'click #login': 'login'
    },

    login: function (event) {
        console.log("Se connecter");
    }

});