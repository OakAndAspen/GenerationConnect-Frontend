import Backbone from "backbone";
import template from "templates/lists/ListFormations.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.collection, "change add remove", this.render);
    },

    render: function () {
        console.log(this.collection.toJSON());
        this.$el.html(this.template({
            formations: this.collection.toJSON()
        }));
        return this.$el;
    }
});