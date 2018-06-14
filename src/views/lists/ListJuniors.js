import Backbone from "backbone";
import template from "templates/lists/ListJuniors.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.collection, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            juniors: this.collection.toJSON()
        }));
        return this.$el;
    }
});