import Backbone from "backbone";
import Senior from "models/Senior";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    },
    model: Senior
});