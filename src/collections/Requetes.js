import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Demande from "../models/Requete";

export default Backbone.Collection.extend({
    model: Demande,
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    }

});