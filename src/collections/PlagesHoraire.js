import Backbone from "backbone";
import AppConfig from "config";
import PlageHoraire from "models/PlageHoraire";

export default Backbone.Collection.extend({
    model: PlageHoraire,
    url: AppConfig.apiUrl + "/plagesHoraire"
});