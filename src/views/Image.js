import Backbone from "backbone";
import imageTmpl from "templates/pages/public/contactForm.html";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = imageTmpl;
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    }

});