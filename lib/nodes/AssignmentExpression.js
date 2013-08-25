// Generated by CoffeeScript 2.0.0-beta5
void function () {
  var Expression, LHSExpression, oneOf, randomElement;
  Expression = require('../classes/Expression');
  LHSExpression = require('../classes/LHSExpression');
  oneOf = require('../combinators').oneOf;
  randomElement = require('../helpers').randomElement;
  module.exports = function () {
    return {
      type: 'AssignmentExpression',
      operator: randomElement([
        '=',
        '+=',
        '-=',
        '*=',
        '/=',
        '%=',
        '<<=',
        '>>=',
        '>>>=',
        '|=',
        '^=',
        '&='
      ]),
      left: LHSExpression(),
      right: oneOf(Expression)
    };
  };
}.call(this);