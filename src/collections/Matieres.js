import Backbone from "backbone";
import AppConfig from "config";
import Matiere from "../models/Matiere";


export default Backbone.Collection.extend({
    model: Matiere,
    url: AppConfig.apiUrl + "/matieres"
});