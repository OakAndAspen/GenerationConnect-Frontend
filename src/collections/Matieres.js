import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Matiere from "../models/Matiere";


export default Backbone.Collection.extend({
    initialize: function(attrs, options) {
        this.localStorage =  new LocalStorage(attrs.localStorage)
    },
    model: Matiere,
});