import Backbone from "backbone";
import AppConfig from "config";
import Requete from "../models/Requete";

export default Backbone.Collection.extend({
    model: Requete,
    url: AppConfig.apiUrl + "/requetes"
});