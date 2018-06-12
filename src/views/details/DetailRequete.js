import Backbone from "backbone";
import template from "templates/details/DetailRequete.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
    },

    render: function () {
        console.log(this.model.toJSON());
        this.$el.html(this.template(this.model.toJSON()));
        return this.$el;
    }
});