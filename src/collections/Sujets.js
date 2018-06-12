import Backbone from "backbone";
import AppConfig from "config";
import Sujet from "../models/Sujet";

export default Backbone.Collection.extend({
    model: Sujet,
    url: AppConfig.apiUrl + "/sujets"
});