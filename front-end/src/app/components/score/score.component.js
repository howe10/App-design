import { parseUrl } from '../../utils/utils.js';
import { Component } from "../../utils/component";
import template from "./score.component.html";

export class ScoreComponent extends Component {
    constructor() {
        super("score");
  }
  getTemplate() {
    return template;
  }
   
  }
  
(function() {      
    class ScoreComponent{
         ScoreComponent() {
            var params = parseUrl();
            this.name = params.name;
            this.size = parseInt(params.size);
            this.time = parseInt(params.time);
        }
    }
    
    ScoreComponent.prototype.init = function init() {
        document.getElementById('name').innerText = this.name;
        document.getElementById('size').innerText = this.size;
        document.getElementById('time').innerText = this.time;
    }

   
    window.ScoreComponent = ScoreComponent;
})();
