import Backbone from "backbone";
import AppConfig from "config";
import Requete from "models/Requete";
import Requetes from "collections/Requetes";

export default Backbone.Collection.extend({
    model: Requete,
    url: AppConfig.apiUrl + "/requetes",

    sansAcceptees: function () {
        let filtered = this.filter(function (model) {
            return model.get("statut") != 'accepte';
        });
        return new Requetes(filtered);
    }
});