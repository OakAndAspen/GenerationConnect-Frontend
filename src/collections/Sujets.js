import Backbone from "backbone";
import {LocalStorage} from "backbone.localstorage";
import Sujet from "../models/Sujet";


export default Backbone.Collection.extend({
    model: Sujet,
    url: "http://pingouin.heig-vd.ch/intouchables/api/sujets"
});