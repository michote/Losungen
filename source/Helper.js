
Date.prototype.getDOY = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  return Math.ceil((this - onejan) / 86400000);
}

function Helper() {}

  Helper.app = "Losungen";

  Helper.vers = "0.3";

  // LocalStorage
  Helper.setItem = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  };

  Helper.getItem = function(key) {
    return JSON.parse(localStorage.getItem(key));
  };

