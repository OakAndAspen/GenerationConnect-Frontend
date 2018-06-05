// -------------- Imports -------------------
// Styles
import css from "styles/main.scss";
import "bootstrap";

// Routers
import PublicRouter from "routers/PublicRouter";
import AdminRouter from "routers/AdminRouter";
import JuniorRouter from "routers/JuniorRouter";
import SeniorRouter from "routers/SeniorRouter";

// Views
import App from "views/App";

// -------------- Page load -------------------

// Routing
Backbone.history.start();

// Redirection vers la bonne page
/* TODO: Ne fonctionne pas. Passe par la fonction redirect et trouve la route,
mais ne passe pas par la fonction dans le router */

let hash = location.hash.substring(1);
if(!hash) hash = 'accueil';

// Création de la vue "App"
let app = new App({
    routers: {
        publicRouter: new PublicRouter(),
        adminRouter: new AdminRouter(),
        juniorRouter: new JuniorRouter(),
        seniorRouter: new SeniorRouter()
    },
    landingPage: hash
});
