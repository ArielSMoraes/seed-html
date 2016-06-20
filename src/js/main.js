"use strict";
var initializer = require('./util/initializer.js');

var APP = {
    common: {
        init: function() {
          //events here
        }
    },
    home: {
        init: function() {
          //set in the body data-controller="home"
          //events here
        }
    },
    anotherPage: {
        init: function() {
          //set in the body data-controller="anotherPage"
          //events here
        }
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
  initializer.init(CIELO)
});
