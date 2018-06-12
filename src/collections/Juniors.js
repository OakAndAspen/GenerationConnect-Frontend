import Backbone from "backbone";
import AppConfig from "config";
import Junior from "models/Junior";

export default Backbone.Collection.extend({
    model: Junior,
    url: AppConfig.apiUrl + "/juniors"
});