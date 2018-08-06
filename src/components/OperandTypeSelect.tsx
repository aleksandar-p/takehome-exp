import * as React from "react";
import { Select } from "./Select";

export enum OperandTypes {
  String,
  Expression
}

export const OperandTypeSelect = ({ value, onChange }) => (
  <div className="operand-select">
    <Select value={value} onChange={(value) => onChange && onChange(parseInt(value))} options={[
      {
        value: OperandTypes.String,
        label: OperandTypes[OperandTypes.String]
      },
      {
        value: OperandTypes.Expression,
        label: OperandTypes[OperandTypes.Expression]
      }
    ]} />
  </div>
)
