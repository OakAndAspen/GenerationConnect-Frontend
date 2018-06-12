import Backbone from "backbone";
import AppConfig from "config";
import Suggestion from "../models/Suggestion";


export default Backbone.Collection.extend({
    model: Suggestion,
    url: AppConfig.apiUrl + "/suggestions"
});