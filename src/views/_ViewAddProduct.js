import Backbone from "backbone";
import addProductTemplate from "templates/_addProduct.html";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = addProductTemplate;
        this.listenTo(this.model, "change", this.render);
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    },

    events: {
        'click #add': 'add'
    },

    add: function (event) {
        let name = this.$el.find('#name');
        let brand = this.$el.find('#brand');
        let type = this.$el.find('#type');
        let price = this.$el.find('#price');

        this.collection.create({
            name: name.val(),
            brand: brand.val(),
            type: type.val(),
            price: parseFloat(price.val())
        }, {validate: true});

        name.val('');
        brand.val('');
        type.val('Keyboard');
        price.val('');
        name.focus();
    }

});