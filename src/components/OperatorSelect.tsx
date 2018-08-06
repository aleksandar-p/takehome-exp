import * as React from "react";
import { Operators } from "../models/Operators";
import { Select } from "./Select";

export const OperatorSelect = ({ value, onChange }) => (
  <div className="operator-select">
    <Select value={value} onChange={(value) => onChange && onChange(parseInt(value))} options={[
      {
        value: Operators.AND,
        label: Operators[Operators.AND]
      },
      {
        value: Operators.OR,
        label: Operators[Operators.OR]
      }
    ]} />
  </div>
)
