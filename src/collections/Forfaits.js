import Backbone from "backbone";
import AppConfig from "config";
import Forfait from "../models/Forfait";

export default Backbone.Collection.extend({
    model: Forfait,
    url: AppConfig.apiUrl + "/forfaits"
});