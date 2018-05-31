import Backbone from "backbone";
import Product from "models/_ModelProduct";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    model: Product,
    localStorage: new LocalStorage('products'),

    comparator : function(ab) {
        return -ab.price;
    }
});