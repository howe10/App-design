"use strict";

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.date.now.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/web.timers.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.object.define-property.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// TODO Step 6 import { parseUrl } from '../../utils/utils.js';
// TODO Step 7 import { Component } from "../../utils/component";
// TODO Step 7 import template from "./game.component.html"
(function () {
  // TODO Step 6 remove this closure
  var environment = {
    api: {
      host: "http://localhost:8081"
    }
  };

  var GameComponent = /*#__PURE__*/function () {
    function GameComponent(id) {
      _classCallCheck(this, GameComponent);

      // function GameComponent() {
      // gather parameters from URL
      var params = this.parseUrl(); // save player name & game ize

      this._name = params.name;
      this._size = parseInt(params.size) || 9;
      this._flippedCard = null;
      this._matchedPairs = 0;
    } // TODO Step 3.1 create a class

    /* class GameComponent constructor */
    // gather parameters from URL
    // init() {
    //   // fetch the cards configuration from the server
    //   this.fetchConfig(
    //     //function (config) {
    //     (config => {
    //       // TODO Step 3.2: use arrow function
    //       this._config = config;
    //       this._cards = this._config.ids.map(element => {
    //         return new CardComponent(element);
    //       }
    //       )
    //       // create a card out of the config
    //       this._boardElement = document.querySelector(".cards");
    //       // TODO Step 3.3: use Array.forEach()
    //       //Step 3.2:voir avec prof
    //       this._cards.forEach(card => {
    //         this._boardElement.appendChild(card.getElement());
    //         card.getElement().addEventListener("click", () => { this._flipCard(card) });
    //       }
    //       )
    //       //ça marche
    //       console.log("on est dans la boucle");
    //       this.start();
    //     })
    //   );
    // };
    // TODO Step 7 implement getTemplate() {}

    /* method GameComponent.start */
    // GameComponent.prototype.start = function start() {


    _createClass(GameComponent, [{
      key: "start",
      value: function start() {
        var _this = this;

        this._startTime = Date.now();
        var seconds = 0;
        document.querySelector("nav .navbar-title").textContent = "Player:".concat(this._name, ". Elapsed time:").concat(seconds++);
        this._timer = setInterval(function () {
          document.querySelector("nav .navbar-title").textContent = "Player:".concat(_this._name, ". Elapsed time:").concat(seconds++);
        }, 1000);
      }
    }, {
      key: "fetchConfig",
      value:
      /* method GameComponent.fetchConfig */
      // GameComponent.prototype.fetchConfig = function fetchConfig(cb) {
      function () {
        var _fetchConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", fetch("".concat(environment.api.host, "/board?size=").concat(this._size), {
                    method: "GET"
                  }).then(function (response) {
                    return response.json();
                  })["catch"](function (error) {
                    return console.log("Error while fetching   config: ", error);
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function fetchConfig() {
          return _fetchConfig.apply(this, arguments);
        }

        return fetchConfig;
      }()
    }, {
      key: "init",
      value: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _this2 = this;

          var config;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.fetchConfig();

                case 2:
                  config = _context2.sent;
                  // TODO Step 3.2: use arrow function
                  this._config = config;
                  this._cards = this._config.ids.map(function (element) {
                    return new CardComponent(element);
                  }); // create a card out of the config

                  this._boardElement = document.querySelector(".cards"); // TODO Step 3.3: use Array.forEach()
                  //Step 3.2:voir avec prof

                  this._cards.forEach(function (card) {
                    _this2._boardElement.appendChild(card.getElement());

                    card.getElement().addEventListener("click", function () {
                      _this2._flipCard(card);
                    });
                  }); //ça marche


                  console.log("on est dans la boucle");
                  this.start();
                  this.start();
                  ;

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
      /* method GameComponent.gotoScore */
      // GameComponent.prototype.gotoScore = function gotoScore() {

    }, {
      key: "gotoScore",
      value: function gotoScore() {
        var _this3 = this;

        var now = Date.now();
        var timeElapsedInSeconds = Math.floor((Date.now() - this._startTime) / 1000);
        clearInterval(this._timer);
        setTimeout(function () {
          // TODO Step 7: change path to: `score?name=${this._name}&size=${this._size}'&time=${timeElapsedInSeconds}`;
          window.location = "../score/score.component.html?name=".concat(_this3._name, "&size=").concat(_this3._size, "&time=").concat(timeElapsedInSeconds);
        }, 750);
      }
    }, {
      key: "_flipCard",
      value:
      /* method GameComponent._flipCard */
      // GameComponent.prototype._flipCard = function _flipCard(card) {
      function _flipCard(card) {
        var _this4 = this;

        if (this._busy) {
          return;
        }

        if (card.flipped) {
          return;
        } // flip the card


        card.flip(); // if flipped first card of the pair

        if (!this._flippedCard) {
          // keep this card flipped, and wait for the second card of the pair
          this._flippedCard = card;
        } else {
          // second card of the pair flipped...
          // if cards are the same
          if (card.equals(this._flippedCard)) {
            this._flippedCard.matched = true;
            card.matched = true;
            this._matchedPairs += 1; // reset flipped card for the next turn.

            this._flippedCard = null;

            if (this._matchedPairs === this._size) {
              this.gotoScore();
            }
          } else {
            this._busy = true; // cards did not match
            // wait a short amount of time before hiding both cards

            setTimeout(function () {
              // hide the cards
              _this4._flippedCard.flip();

              card.flip();
              _this4._busy = false; // reset flipped card for the next turn.

              _this4._flippedCard = null;
            }
            /*.bind(this)*/
            , 500);
          }
        }
      }
    }, {
      key: "parseUrl",
      value: // TODO Step 6: Move this method to utils.js
      // function parseUrl() {
      function parseUrl() {
        var url = window.location;
        var query = url.href.split("?")[1] || "";
        var delimiter = "&"; // var result = {};

        var parts = query.split(delimiter); // TODO Step 3.3: Use Array.map() & Array.reduce()
        //for (var i in parts) {
        //var item = parts[i];
        //var kv = item.split("=");
        // result[kv[0]] = kv[1];
        // }

        var result = parts.map(function (item) {
          return item.split("=");
        }).reduce(function (before, currenrt) {
          before[currenrt[0]] = currenrt[1];
          return before;
        }, {});
        return result;
      }
    }]);

    return GameComponent;
  }(); // put component in global scope, to be runnable right from the HTML.
  // TODO Step 7: export GameComponent


  window.GameComponent = GameComponent;
})();