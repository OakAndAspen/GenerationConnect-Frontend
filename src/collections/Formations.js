import Backbone from "backbone";
import AppConfig from "config";
import Formation from "models/Formation";

export default Backbone.Collection.extend({
    model: Formation,
    url: AppConfig.apiUrl + "/formations"
});