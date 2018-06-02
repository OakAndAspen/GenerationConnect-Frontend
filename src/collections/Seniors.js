import Backbone from "backbone";
import Senior from "models/Senior";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    model: Senior,
    localStorage: new LocalStorage('seniors')
});