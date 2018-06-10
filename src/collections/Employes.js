import Backbone from "backbone";
import Compte from "models/Employe";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    model: Compte,
    url: "http://pingouin.heig-vd.ch/intouchables/api/employes"
});