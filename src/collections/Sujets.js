import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Sujet from "../models/Sujet";


export default Backbone.Collection.extend({
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    },
    model: Sujet,
});