import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Intervention from "../models/Intervention";

export default Backbone.Collection.extend({
    model: Intervention,
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    }

});