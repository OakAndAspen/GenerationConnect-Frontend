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
let app = new App();

app.routers = {
    publicRouter: new PublicRouter(),
    adminRouter: new AdminRouter(),
    juniorRouter: new JuniorRouter(),
    seniorRouter: new SeniorRouter()
};

app.redirect(hash);

/*import Junior from "models/Junior";
import Adresse from "models/Adresse";
import Sujet from "models/Sujet";
import Sujets from "collections/Sujets";
import Matiere from "models/Matiere";
import Matieres from "collections/Matieres";
import PlageHoraire from "models/PlageHoraire";
import PlagesHoraire from "collections/PlagesHoraire";

let adresseHabitation1 = new Adresse({
    id: 122,
    ligne1: "Rue Orient Ville 10",
    ligne2: "",
    ligne3: "",
    ville: "Lausanne",
    pays: "Suisse",
    npa: 1005
});

let adresseDepart1 = new Adresse({
    id: 122,
    ligne1: "Rue Louis Curttat 24",
    ligne2: "",
    ligne3: "",
    ville: "Lausanne",
    pays: "Suisse",
    npa: 1005
});

let adresseFacturation1 = new Adresse({
    id: 122,
    ligne1: "Avenue de Morges 13",
    ligne2: "",
    ligne3: "",
    ville: "Lausanne",
    pays: "Suisse",
    npa: 1005
});

let sujet1 = new Sujet({
    id: 154,
    nom: "skype",
    description: "blablabla",
    selected: true
});
let sujet2 = new Sujet({
    id: 154,
    nom: "MSN",
    description: "blablabla",
    selected: true
});
let sujet3 = new Sujet({
    id: 154,
    nom: "skyblog",
    description: "blablabla",
    selected: false
});
let sujet4 = new Sujet({
    id: 154,
    nom: "IE",
    description: "blablabla",
    selected: true
});

let sujets1 = new Sujets([sujet1,sujet2]);
sujets1.fetch();
let sujets2 = new Sujets([sujet3,sujet4]);
sujets2.fetch();
let matiere1 = new Matiere({
    id: 223,
    nom: "Messagerie",
    description: "blabla",
    sujets: sujets1
});

let matiere2 = new Matiere({
    id: 223,
    nom: "Internet",
    description: "blabla",
    sujets: sujets2
});

let matieres1 = new Matieres([matiere1,matiere2]);
matieres1.fetch();
let plageHoraire1 = new PlageHoraire({
    jour: "Lundi",
    heureDebut: "10:00",
    heureFin: "12:00"
});

let plageHoraire2 = new PlageHoraire({
    jour: "Lundi",
    heureDebut: "15:00",
    heureFin: "17:00"
});

let plageHoraire3 = new PlageHoraire({
    jour: "Mardi",
    heureDebut: "10:00",
    heureFin: "12:00"
});

let plageHoraire4 = new PlageHoraire({
    jour: "Jeudi",
    heureDebut: "10:00",
    heureFin: "12:00"
});

let plagesHoraire1 = new PlagesHoraire([plageHoraire1,plageHoraire2,plageHoraire3,plageHoraire4]);
plagesHoraire1.fetch();

let junior1 = new Junior({
    id: 123,
    prenom: "juan",
    nom: "moreno",
    telephone: 786488797,
    email: "j.j.moreno994@gmail.com",
    adresseHabitation: adresseHabitation1,
    limitetempstransport: 60,
    status: "engagé",
    adresseDepart: adresseDepart1,
    adresseFacturation: adresseFacturation1,
    noAVS: 745348611564224,
    banqueNom: "BCV",
    banqueBIC: 456,
    banqueIBAN: "CH435523825252645",
    matieres: matieres1,
    plagesHoraire: plagesHoraire1,
});

console.log(JSON.stringify(junior1));*/
