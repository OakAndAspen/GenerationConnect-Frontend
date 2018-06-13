import Backbone from "backbone";
import AppConfig from "config";
import Intervention from "models/Intervention";

export default Backbone.Collection.extend({
    model: Intervention,
    url: AppConfig.apiUrl + "/interventions"
});