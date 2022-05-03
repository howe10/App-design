import { Component } from "../../utils/component";
import { parseUrl } from '../../utils/utils.js';
import { CardComponent } from "./card/card.component";
import template from "./game.component.html";

export class GameComponent extends Component {
  constructor() {
    super("game");
}
getTemplate() {
  return template;
}
 }

(function () {
const environment = {
    api: {
        host: "http://localhost:8081",
      },
    };

  class GameComponent {
      constructor(id) {
        var params = parseUrl();
        this._name = params.name;
        this._size = parseInt(params.size) || 9;
        this._flippedCard = null;
        this._matchedPairs = 0;
      }
      start() {
        this._startTime = Date.now();
        var seconds = 0;

        document.querySelector("nav .navbar-title").textContent = `Player:${this._name}. Elapsed time:${seconds++}`;
        this._timer = setInterval(
          () => {

            document.querySelector("nav .navbar-title").textContent = `Player:${this._name}. Elapsed time:${seconds++}`;
          },
          1000
        );
      };

      async fetchConfig() {
        return fetch(`${environment.api.host}/board?size=${this._size}`, {
          method: "GET",
        })

          .then((response) => response.json())
          .catch((error) => console.log("Error while fetching   config: ", error));
      };

      async init() {
        
        let config = await this.fetchConfig();
        this._config = config;
        this._cards = this._config.ids.map(element => {
          return new CardComponent(element);
        }
        )

        this._boardElement = document.querySelector(".cards");

        this._cards.forEach(card => {
          this._boardElement.appendChild(card.getElement());
          card.getElement().addEventListener("click", () => { this._flipCard(card) });
        }
        ) 
        console.log("on est dans la boucle");

        this.start();
        this.start();
        ;
      }

      gotoScore() {
        const timeElapsedInSeconds = Math.floor(
          (Date.now() - this._startTime) / 1000
        );

        setTimeout(() => window.location.hash = `score?name=${this._name}&size=${this._size}'&time=${timeElapsedInSeconds}`, 750);
      };

      _flipCard(card) {
        if (this._busy) {
          return;
        }

        if (card.flipped) {
          return;
        }

        
        card.flip();

       
        if (!this._flippedCard) {
         
          this._flippedCard = card;
        } else {
        

         
          if (card.equals(this._flippedCard)) {
            this._flippedCard.matched = true;
            card.matched = true;
            this._matchedPairs += 1;

            this._flippedCard = null;

            if (this._matchedPairs === this._size) {
              this.gotoScore();
            }
          } else {
            this._busy = true;

            setTimeout(
              () => {
               
                this._flippedCard.flip();
                card.flip();
                this._busy = false;

               
                this._flippedCard = null;
              },
              500
            );
          }
        }
      };

     
    }
   })();
  window.GameComponent = GameComponent;

