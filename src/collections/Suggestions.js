import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Suggestion from "../models/Suggestion";


export default Backbone.Collection.extend({
    model: Suggestion,
    url: "http://pingouin.heig-vd.ch/intouchables/api/suggestions"
});