import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import PlageHoraire from "models/PlageHoraire";

export default Backbone.Collection.extend({
    model: PlageHoraire,
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    }
});