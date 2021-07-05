import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
} from "shards-react";

import { Store } from "../../flux";
import CheckboxGroup from "./CheckboxGroup";
import RadioInputGroup from "./RadioInputGroup";

export default function FormBuilder() {
  const [formItems, setFormItems] = useState([]);

  useEffect(() => {
    if (Store.getFormItems()) {
      setFormItems(Store.getFormItems());
    }
  }, [Store.getFormItems()]);

  const selectInputType = (item) => {
    let Component;
    switch (item.type) {
      case "text":
        Component = FormInput;
        break;
      case "textarea":
        Component = FormTextarea;
        break;
      case "checkbox":
        Component = CheckboxGroup;
        break;
      case "radio":
        Component = RadioInputGroup;
        break;
      default:
    }
    return <Component options={item.options} type="edit" />;
  };

  return (
    <Col
      className="b4g-white border-1 mr-3 p-0 border card"
      style={{ boxShadow: "none", minHeight: "100vh" }}
    >
      <Card style={{ boxShadow: "none" }}>
        <CardHeader className="border-bottom">
          <h5 className="m-0">Progress Intake Form</h5>
        </CardHeader>

        <Form id="progress-intake-form">
          {formItems.length >= 1 &&
            formItems.map((item, i) => (
              <FormGroup
                className={`px-3 pt-3 pb-3 mb-0 ${
                  i !== formItems.length - 1 ? "border-bottom" : ""
                }`}
                key={`item-${i + 1}`}
              >
                {/* label */}
                <FormInput
                  style={{
                    fontSize: "1rem",
                    marginBottom: ".5rem",
                  }}
                  placeholder="Field Title"
                  className="d-block label-input p-1"
                />
                {selectInputType(item)}
              </FormGroup>
            ))}
        </Form>
      </Card>
    </Col>
  );
}
