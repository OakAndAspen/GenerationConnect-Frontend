import Backbone from "backbone";
import Compte from "models/Compte";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    model: Compte,
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    }
});