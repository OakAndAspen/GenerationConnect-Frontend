import Backbone from "backbone";
import template from "templates/lists/ListSeniors.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.collection, "change add remove", this.render);
        this.statutActif = true;
        this.statutTraitement = true;
        this.recherche = '';
    },

    render: function () {

        let results = this.collection.where({

        });
        this.$el.html(this.template({
            seniors: this.collection.toJSON()
        }));
        return this.$el;
    },


});