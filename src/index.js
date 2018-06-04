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
let hash = location.hash;

// Routing
Backbone.history.start();

let app = new App({
    routers: {
        publicRouter: new PublicRouter(),
        adminRouter: new AdminRouter(),
        juniorRouter: new JuniorRouter(),
        seniorRouter: new SeniorRouter()
    }
});

//app.redirect()
