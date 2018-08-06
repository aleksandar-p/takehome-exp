import * as React from "react";
import { OperandTypeSelect, OperandTypes } from "./OperandTypeSelect";

export const OperandInput = ({ textValue, textChange, selectValue, selectChange }) => (
  <div className="item-operand-input">
    <OperandTypeSelect value={selectValue} onChange={e => selectChange && selectChange(e)} />
    {
      selectValue === OperandTypes.String &&
      <input placeholder="Value" value={textValue} onChange={({ currentTarget: { value }}) => textChange && textChange(value)} type="text" />
    }
  </div>
)
