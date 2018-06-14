import Backbone from "backbone";
import template from "templates/lists/ListRequetes.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.collection, "change add remove", this.render);
    },

    render: function () {
        let requetes = this.collection.sansAcceptees();
        console.log(requetes);
        this.$el.html(this.template({
            requetes: requetes.toJSON()
        }));
        return this.$el;
    }
});