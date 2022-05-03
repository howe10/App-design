// front-end/src/main.js
//import { parseUrl } from "./app/utils/utils.js";

//const parameters = parseUrl();

//document
  //.querySelector("body")
  //.appendChild(document.createTextNode(JSON.stringify(parameters)));

import "bootstrap/dist/css/bootstrap.css"
//import "../src/app/styles/bootstrap.css";
// import "front-end\src\app\styles\bootstrap.css";
import "./app/styles/style.css";
import { parseUrl } from "./app/utils/utils";
import { Router } from "./app/utils/router";
import { GameComponent } from "./app/components/game/game.component";
import { WelcomeComponent } from "./app/components/welcome/welcome.component";  // TODO Step 7 uncomment
import { ScoreComponent } from "./app/components/score/score.component";  // TODO Step 7 uncomment
//import { CardComponent } from "./app/components/game/card/card.component";  // TODO Step 7 uncomment
const parameters = parseUrl();
const outlet = document.querySelector("#content-outlet");

const router = new Router(outlet)
  // .register("", WelcomeComponent) // TODO Step 7 uncomment
  .register("", WelcomeComponent)
  .register("game", GameComponent)
 // .register("card", CardComponent)
  .register("score", ScoreComponent);
// .register("score", ScoreComponent); // TODO Step 7 uncomments
document
.querySelector("body")
.appendChild(document.createTextNode(JSON.stringify(parameters)));