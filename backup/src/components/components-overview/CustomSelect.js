import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect,
} from "shards-react";

const CustomSelect = ({
  label,
  options = [],
  selected,
  setSelectedPatient,
  handleChange,
  disabled,
  type,
}) => (
  <div>
    <InputGroup className={`${type === "edit" ? "mb-0" : ""}`}>
      <InputGroupAddon type="prepend">
        <InputGroupText>{label}</InputGroupText>
      </InputGroupAddon>
      <FormSelect
        required
        onChange={handleChange}
        disabled={disabled}
        style={{ background: "transparent" }}
        name="subscriptionPackage"
      >
        <option value="" onClick={() => setSelectedPatient("")}>
          Choose
        </option>
        {options[0] && options[0].id
          ? options.map((option) => (
              <option
                value={option.id}
                onClick={() => setSelectedPatient(option.id)}
              >
                {option.name}
              </option>
            ))
          : options.map((option) => (
              <option
                value={option}
                selected={selected === option ? "selected" : false}
              >
                {option}
              </option>
            ))}
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
