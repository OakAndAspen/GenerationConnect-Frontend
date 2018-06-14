import Backbone from "backbone";
import AppConfig from "config";
import Soumission from "models/Soumission";

export default Backbone.Collection.extend({
    model: Soumission,
    url: AppConfig.apiUrl + "/soumissions",

});