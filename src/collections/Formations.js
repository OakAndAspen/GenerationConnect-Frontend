import Backbone from "backbone";
import Formation from "models/Formation";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    },
    model: Formation
});