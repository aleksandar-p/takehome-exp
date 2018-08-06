import { Operators } from './Operators';

export interface Expression {
  left: Expression | string;
  operator: Operators;
  right: Expression | string;
}
