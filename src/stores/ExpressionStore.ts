import { observable, computed } from 'mobx';
import { Operators } from '../models/Operators';
import { Expression } from '../models/Expression';

export const DEFAULT_EXPRESSION = {
  left: "",
  operator: Operators.AND,
  right: ""
}

export class ExpressionStore {
  @observable
  expression: Expression = DEFAULT_EXPRESSION;

  private parseExpression(expression: Expression) {
    let expressionResult = "(";
    expressionResult +=
      (typeof expression.left === "string" ? `"${expression.left}"` : this.parseExpression(expression.left as Expression)) + " " +
      Operators[expression.operator] + " " +
      (typeof expression.right === "string" ? `"${expression.right}"` : this.parseExpression(expression.right as Expression))
    ;
    return expressionResult + ")";
  }

  @computed
  get expressionString() {
    return this.parseExpression(this.expression);
  }
}
