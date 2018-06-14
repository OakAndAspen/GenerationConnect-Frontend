// -------------- Imports -------------------
// Styles
import css from "styles/main.scss";
import "bootstrap";

// Views
import Breadcrumbs from "views/components/Breadcrumbs";
import NavBar from "views/components/NavBar";
import SeniorRouter from "routers/SeniorRouter";
import PublicRouter from "routers/PublicRouter";
import JuniorRouter from "routers/JuniorRouter";
import AdminRouter from "routers/AdminRouter";
import Backbone from "backbone";

// --------- Au chargement de la page -----------
// Routing
Backbone.history.start();

// Affichage de la barre de navigation et des breadcrumbs
let breadcrumbs = new Breadcrumbs();
$('#pageBreadcrumbs').html(breadcrumbs.render());
let navBar = new NavBar();
$('#pageHeader').html(navBar.render());

// S'exécute à chaque changement de page
Backbone.history.on("all", function (route, router) {
    //console.log("My location is "+ location.hash);
    navBar.render();
    breadcrumbs.render();
});

// Création des routeurs
let routers = {
    publicRouter: new PublicRouter(),
    adminRouter: new AdminRouter(),
    juniorRouter: new JuniorRouter(),
    seniorRouter: new SeniorRouter()
};

// Récupération du hash à charger
let hash = location.hash.substring(1);
if (!hash) hash = 'accueil';
redirect(hash);

// ----- Fonctions -----
function redirect (page) {
    for (let router in routers) {
        for (let route in routers[router].routes) {
            if (route.localeCompare(page) == 0) {
                routers[router].navigate(page, true);
                Backbone.history.loadUrl();
                break;
            }
        }
    }
}