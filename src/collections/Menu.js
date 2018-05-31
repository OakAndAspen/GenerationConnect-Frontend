import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    model: Product,
    localStorage: new LocalStorage('cart'),

    getTotal: function () {
        let sum = 0;
        this.each(function (item) {
           sum += parseFloat(item.get('price'));
        });
        return sum;
    }
});