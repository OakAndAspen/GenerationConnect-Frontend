import Backbone from "backbone";
import cartTemplate from "templates/_cart.html";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = cartTemplate;
        this.listenTo(this.collection, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            products: this.collection.toJSON(),
            total: this.collection.getTotal()
        }));
        return this.$el;
    },

    events: {
        'click .removeFromCart': 'removeFromCart'
    },

    removeFromCart: function (event) {
        let id = $(event.target).attr('data-id');
        this.collection.get(id).destroy();
    }

});