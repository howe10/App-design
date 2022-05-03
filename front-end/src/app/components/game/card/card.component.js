import "./card.component.css";
import template from "./card.component.html";
import { Component } from "../../../utils/component";

export class CardComponent extends Component {
    constructor(id) {
      super("card");
      this._imageElt.querySelector(
        "img.front-face"
      ).src = `src/app/components/game/card/assets/card-${this._id}.png`;
      this._imageElt.querySelector("img.back-face").src ="src/app/components/game/card/assets/back.png";
    }
    getTemplate() {
      return template;
    }
  }
(function () {

  class CardComponent {
    constructor(id) {
      

    this._flipped = false;

    this.matched = false;

    this._id = id;

    this._imageElt = this.getElement().querySelector(".card-wrapper");

    this._imageElt.querySelector("img.front-face").src =
      "./card/assets/card-" + this._id + ".png";
    this._imageElt.querySelector("img.back-face").src =
    
      "./card/assets/back.png";
      
    }

 
    flip() {
      this._imageElt.classList.toggle("flip");
      this._flipped = !this._flipped;
    }
  
    equals(card) {
      return card._id === this._id;
    }

    get flipped() {
      return this._flipped;
  }
  }
})();
window.CardComponent = CardComponent;

