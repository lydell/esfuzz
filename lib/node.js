// Generated by CoffeeScript 2.0.0-beta7
void function () {
  var Node;
  module.exports = Node = function () {
    function Node() {
    }
    Node.prototype.toJSON = function () {
      var memo, p;
      memo = { type: this.type };
      for (p in this.constructor.prototype) {
        if (!isOwn$(this.constructor.prototype, p))
          continue;
        memo[p] = this.constructor.prototype[p];
      }
      for (p in this) {
        if (!isOwn$(this, p))
          continue;
        memo[p] = this[p];
      }
      return memo;
    };
    Node.prototype.toString = function () {
      return JSON.stringify(this);
    };
    return Node;
  }();
  function isOwn$(o, p) {
    return {}.hasOwnProperty.call(o, p);
  }
}.call(this);
