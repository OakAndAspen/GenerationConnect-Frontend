// -------------- Imports -------------------
// Styles
import css from "styles/main.scss";
import "bootstrap";

// Views
import App from "views/App";

// -------------- Page load -------------------

// Routing
Backbone.history.start();

let hash = location.hash.substring(1);
if(!hash) hash = 'accueil';

// Création de la vue "App"
let app = new App();

app.redirect(hash);