import Backbone from "backbone";
import template from "templates/details/DetailRequete.handlebars";
import AppConfig from "config";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.matching = attrs.matching;
    },

    render: function () {
        this.$el.html(this.template({
            requete: this.model.toJSON(),
            matching: this.matching
        }));
        return this.$el;
    },

    events: {
        "click .choose": "soumission"
    },

    // Soumission du choix du junior au backend
    soumission: function (event) {
        let juniorId = $(event.target).attr("data-id");
        let requeteId = this.model.get("id");
        $.ajax({
            type: "POST",
            url: AppConfig.apiUrl+"/soumissions",
            data: {
                "requete_id": requeteId,
                "junior_id": juniorId
            },
            success: function (data) {
                console.log("Success");
                console.log(data);
            },
            error: function (a, b, c) {
                console.log(a);
                console.log(b);
                console.log(c);
            }
        });
    }
});