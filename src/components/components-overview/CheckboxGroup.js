import React from "react";
import PropTypes from "prop-types";
import { FormCheckbox, FormInput } from "shards-react";

export default function CheckboxGroup({
  title,
  options = [],
  type,
  ...restProps
}) {
  return (
    <fieldset {...restProps}>
      {options.length &&
        options.map((item, i) => (
          <FormCheckbox key={`option-${i + 1}`} style={{width: "fit-content"}}>
            {type !== "edit" ? (
              item
            ) : (
              <FormInput
                className="label-input"
                style={{
                  marginTop: "-1.7rem",
                  width: "10rem",
                  padding: ".4rem .75rem",
                  fontSize: ".9125rem",
                }}
              />
            )}
          </FormCheckbox>
        ))}
    </fieldset>
  );
}

CheckboxGroup.propTypes = {
  title: PropTypes.string,
};
