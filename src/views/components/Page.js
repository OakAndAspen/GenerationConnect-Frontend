import Backbone from "backbone";
import AppConfig from "config";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.id = attrs.id;
    },

    render: function () {
        $.ajax({
            type: "GET",
            url: AppConfig.apiUrl + "/pages/" + this.id,
            success: function (data) {
                console.log("Success!");
                console.log(data.contenu);
                $('#pageContent').html($.parseHTML(data.contenu));
            }
        });
    }
});