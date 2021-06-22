import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect
} from "shards-react";

const CustomSelect = ({ label, options={}}) => (
  <div>
    <InputGroup className="mb-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>{label}</InputGroupText>
      </InputGroupAddon>
      <FormSelect>
        <option>Choose</option>
        <option>...</option>
      </FormSelect>
    </InputGroup>

    {/* <InputGroup className="mb-3">
      <FormSelect>
        <option>Choose</option>
        <option>...</option>
      </FormSelect>
      <InputGroupAddon type="append">
        <InputGroupText>Options</InputGroupText>
      </InputGroupAddon>
    </InputGroup> */}
  </div>
);

export default CustomSelect;
