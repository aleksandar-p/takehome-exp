import * as React from "react";
import { ExpressionItem } from "./ExpressionItem";

export const ExpressionItemOperands = ({ left, right }) => (
  <div className="item-expression-operands">
    {
      typeof left !== "string" &&
        <div className="item-expression-operand-left">
          <ExpressionItem item={left} />
        </div>
    }
    {
      typeof right !== "string" &&
        <div className="item-expression-operand-right">
          <ExpressionItem item={right} />
        </div>
    }
  </div>
)
