import Backbone from "backbone";
import Junior from "models/Junior";
import {LocalStorage} from "backbone.localstorage";

export default Backbone.Collection.extend({
    model: Junior,
    localStorage: new LocalStorage('juniors')
});