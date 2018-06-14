import Backbone from "backbone";
import template from "templates/lists/ListSeniors.handlebars";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = template;
        this.listenTo(this.collection, "change add remove", this.render);
        /*this.statut = '';
        this.recherche = 'e';*/
    },

    render: function () {
        /*let recherche = this.recherche;
        let results = this.collection.clone();
        results.each(function (result) {
            if(!name.includes(recherche)){
                results.remove(this);
            }
        });*/

        this.$el.html(this.template({
            seniors: this.collection.toJSON()
        }));
        return this.$el;
    }/*,
    
    events: {
        "change [name=statut]" : "filter",
        "change [name=recherche]" : "search"
    },

    filter: function (event) {
        console.log("filtering");
        this.statut = $(event.target).val();
        this.render();
    },

    search: function (event) {
        console.log("searching");
        this.recherche = $(event.target).val();
        this.render();
    }*/
});