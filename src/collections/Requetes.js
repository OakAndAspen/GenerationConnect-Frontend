import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Requete from "../models/Requete";

export default Backbone.Collection.extend({
    model: Requete,
    url: "http://pingouin.heig-vd.ch/intouchables/api/requetes"
});