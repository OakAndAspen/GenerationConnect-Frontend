import Backbone from "backbone";
import Compte from "models/Employe";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    },
    model: Compte
});