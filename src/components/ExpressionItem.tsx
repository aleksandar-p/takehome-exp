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
    left: this.hasOperand("left") ? OperandTypes.Expression : OperandTypes.String,
    right: this.hasOperand("right") ? OperandTypes.Expression : OperandTypes.String,
    open: true
  }

  updateOperand = (value, operand: "left" | "right") => {
    this.setState({ [operand]: value });
    this.props.item[operand] = value === OperandTypes.Expression ? DEFAULT_EXPRESSION : "";
  }

  toggle = () => {
    this.setState((state: { open: boolean }) => ({ open: !state.open }));
  }

  hasOperand(operand: "left" | "right") {
    return typeof this.props.item[operand] !== "string";
  }

  render() {
    const { item } = this.props;

    return (
      <div className={
        "container" +
        (this.hasOperand("left") ? " has-left" : "") +
        (this.hasOperand("right") ? " has-right" : "")}>
        {
          (this.hasOperand("left") || this.hasOperand("right")) &&
          <button
            onClick={this.toggle}
            className={"toggle" + (this.state.open ? " open" : " close")}
            data-tooltip={this.state.open ? "Close" : "Open"}>
            {this.state.open ? "-" : "+"}
          </button>
        }
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
        {this.state.open && <ExpressionItemOperands left={item.left} right={item.right} />}
      </div>
    );
  }
}
