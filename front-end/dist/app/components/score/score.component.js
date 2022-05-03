"use strict";

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.array.map.js");

import { parseUrl } from '../../utils/utils.js';
// TODO Step 7 import { Component } from "../../utils/component";
// TODO Step 7 import template from "./score.component.html"
(function () {
  // TODO Step 6 remove this closure
  // TODO Step 3.1 create a class

  /* class ScoreComponent constructor */
  function ScoreComponent() {
    var params = parseUrl();
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }
  /* method ScoreComponent.init */


  ScoreComponent.prototype.init = function init() {
    document.getElementById('name').innerText = this.name;
    document.getElementById('size').innerText = this.size;
    document.getElementById('time').innerText = this.time;
  }; // TODO Step 7 implement getTemplate() {}
  // TODO Step 6: Move this method to utils.js


  


  window.ScoreComponent = ScoreComponent;
})();