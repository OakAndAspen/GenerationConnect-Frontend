import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Intervention from "../models/Intervention";

export default Backbone.Collection.extend({
    model: Intervention,
    url: "http://pingouin.heig-vd.ch/intouchables/api/interventions"
});