import React from "react";
import { FormRadio, FormInput } from "shards-react";

export default function RadioInputGroup({ title, options, type, ...restProps }) {
  return (
    <fieldset {...restProps}>
      {options.length &&
        options.map((item, i) => (
          <FormRadio key={`option-${i + 1}`}>{type !== "edit" ? (
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
            )}</FormRadio>
        ))}
    </fieldset>
  );
}
