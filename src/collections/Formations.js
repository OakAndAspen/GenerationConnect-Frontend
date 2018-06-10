import Backbone from "backbone";
import Formation from "models/Formation";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    model: Formation,
    url: "http://pingouin.heig-vd.ch/intouchables/api/formations"
});