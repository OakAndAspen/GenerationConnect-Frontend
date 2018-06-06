import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Suggestion from "../models/Suggestion";


export default Backbone.Collection.extend({
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    },
    model: Suggestion
});