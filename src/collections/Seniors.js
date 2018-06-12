import Backbone from "backbone";
import AppConfig from "config";
import Senior from "models/Senior";

export default Backbone.Collection.extend({
    model: Senior,
    url: AppConfig.apiUrl + "/seniors"
});