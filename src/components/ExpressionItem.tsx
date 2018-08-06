import * as React from "react";
import { observer } from "mobx-react";
import { Expression } from "../models/Expression";
import { OperandTypes } from "./OperandTypeSelect";
import { OperandInput } from "./OperandInput";
import { OperatorSelect } from "./OperatorSelect";
import { ExpressionItemOperands } from "./ExpressionItemOperands";
import { DEFAULT_EXPRESSION } from "../stores/ExpressionStore";

@observer
export class ExpressionItem extends React.Component<{ item: Expression }> {
  state = {
    left: OperandTypes.String,
    right: OperandTypes.String
  }

  updateOperand = (value, operand: "left" | "right") => {
    this.setState({ [operand]: value });
    this.props.item[operand] = value === OperandTypes.Expression ? DEFAULT_EXPRESSION : "";
  }

  render() {
    const { item } = this.props;

    return (
      <div className={
        "container" +
        (typeof item.left !== "string" ? " has-left" : "") +
        (typeof item.right !== "string" ? " has-right" : "")}>
        <div className="item">
          <OperandInput
            textValue={this.props.item.left}
            textChange={value => this.props.item.left = value}
            selectValue={this.state.left}
            selectChange={(e) => this.updateOperand(e, "left")} />
          <OperatorSelect value={item.operator} onChange={value => item.operator = value} />
          <OperandInput
            textValue={this.props.item.right}
            textChange={value => this.props.item.right = value}
            selectValue={this.state.right}
            selectChange={(e) => this.updateOperand(e, "right")} />
        </div>
        <ExpressionItemOperands left={item.left} right={item.right} />
      </div>
    );
  }
}
