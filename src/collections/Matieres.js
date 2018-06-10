import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Matiere from "../models/Matiere";


export default Backbone.Collection.extend({
    model: Matiere,
    url: "http://pingouin.heig-vd.ch/intouchables/api/matieres"
});