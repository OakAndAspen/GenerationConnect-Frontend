import Backbone from "backbone";
import navBarTemplate from "templates/_navBar.html";

export default Backbone.View.extend({

    initialize: function (attrs, options) {
        this.template = navBarTemplate;
        this.router = attrs.router;
    },

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    },

    events: {
        'click .nav-link': 'redirect'
    },
    
    redirect: function (event) {
        let page = $(event.target).attr('data-target');
        this.router.navigate(page, true);
    }
});