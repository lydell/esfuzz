// Generated by CoffeeScript 2.0.0-beta5
void function () {
  var Expression, IdentifierName, Key, leaf, Number_, oneOf, Property, String_, TYPE;
  Expression = require('../classes/Expression');
  IdentifierName = require('./IdentifierName');
  Number_ = require('./Number');
  String_ = require('./String');
  oneOf = require('../combinators').oneOf;
  TYPE = 'ObjectExpression';
  leaf = function (depth) {
    return {
      type: TYPE,
      properties: []
    };
  };
  Key = function (args) {
    var cache$;
    args = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
    return (cache$ = oneOf([
      String_,
      Number_,
      IdentifierName
    ])).apply(cache$, [].slice.call(args).concat());
  };
  Property = function (depth) {
    return {
      kind: 'init',
      key: Key(depth),
      value: Expression(depth)
    };
  };
  module.exports = function (depth) {
    --depth;
    return {
      type: TYPE,
      properties: listOf([Property])(depth)
    };
  };
}.call(this);