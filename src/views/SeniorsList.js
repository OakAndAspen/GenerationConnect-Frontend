import Backbone from "backbone";
import template from "templates/pages/admin/senior/index.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.collection, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            seniors: this.collection.toJSON()
        }));
        return this.$el;
    }
});