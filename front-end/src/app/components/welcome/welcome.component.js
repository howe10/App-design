import { Component } from "../../utils/component";
import template from  "./welcome.component.html"
export class WelcomeComponent extends Component {
    constructor() {
        super("welcome");
  }
  getTemplate() {
    return template;
  }
}
  
(function() {  


    class WelcomeComponent{

    }

    WelcomeComponent.prototype.init = function init() {
        var form = document.querySelector('form.form-signin');

        form.addEventListener('submit', function(event) {     
            event.preventDefault();
            if (form.checkValidity() === false) {
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                var name = event.srcElement.querySelector('#nickname').value;
                var size = parseInt(event.srcElement.querySelector('#size').value);

                _startGame(name, size);
            }
        }.bind(this), false);

        return this;
    }

    function _startGame(name, size) {
 
        window.location.hash = `game?name=${name}=name&size=${size}`;
    }
    window.WelcomeComponent = WelcomeComponent
})();