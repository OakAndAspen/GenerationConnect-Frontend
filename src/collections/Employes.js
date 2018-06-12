import Backbone from "backbone";
import AppConfig from "config";
import Compte from "models/Employe";

export default Backbone.Collection.extend({
    model: Compte,
    url: AppConfig.apiUrl + "/employes"
});