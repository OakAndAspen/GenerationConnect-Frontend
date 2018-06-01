import Backbone from "backbone";
import productsTemplate from "templates/_products.html";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = productsTemplate;
        this.cart = attrs.cart;
        this.listenTo(this.collection, "change add remove", this.render);
        this.listenTo(this.cart, "change add remove", this.render);
    },

    render: function () {
        this.$el.html(this.template({
            products: this.collection.toJSON()
        }));
        return this.$el;
    },

    events: {
        'click .addToCart': 'addToCart'
    },

    addToCart: function (event) {
        let id = $(event.target).attr('data-id');
        let item = this.collection.get(id).clone();
        item.unset(id);
        this.cart.create(item);
    }

});