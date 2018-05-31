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
Backbone.history.start({
    pushState: true,
    root: "/_ECOLE/ProjetIntegration/dist/"
});

let app = new App({
    routers: {
        publicRouter: new PublicRouter(),
        adminRouter: new AdminRouter(),
        juniorRouter: new JuniorRouter(),
        seniorRouter: new SeniorRouter()
    }
});

/*let shopProducts = new Products();
cartProducts.fetch();*/

// test comment



