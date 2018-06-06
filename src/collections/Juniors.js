import Backbone from "backbone";
import Junior from "models/Junior";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    model: Junior,
    url: "http://pingouin.heig-vd.ch/intouchables/api/juniors",
    initialize: function(attrs, options) {
        //this.localStorage =  new LocalStorage(attrs.localStorage)
    }
});