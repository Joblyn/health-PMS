import React, { useEffect } from "react";
import { Card, CardHeader, Col, FormGroup } from "shards-react";

import formItems from "../../data/form-items";
import { Constants, Store } from "../../flux";

export default function FormItemCatalogue() {
  useEffect(() => {
    console.log(Store.getFormItems());
  }, [Store.getFormItems()]);

  return (
    <Col
      className="bg-white border-1 mr-3 p-0 border card"
      style={{ boxShadow: "none", maxWidth: "309px", maxHeight: "100vh" }}
    >
      <Card className="p-0" style={{ boxShadow: "none" }}>
        <CardHeader className="border-bottom">
          <h5 className="m-0">Question Banks</h5>
        </CardHeader>
      </Card>

      <Col style={{ overflowY: "auto", overflowX: "none" }} className="p-0">
        {formItems.map((item, i) => {
          return (
            <FormGroup
              className={`${i !== formItems.length - 1 &&
                "border-bottom"} p-3 m-0 cursor-pointer form-item`}
              onClick={() => {
                Store.addFormItem(Constants.ADD_ITEM, item);
                console.log(Store.getFormItems());
              }}
              key={`item-${i + 1}`}
            >
              <label
                className="text-muted d-block mb-2"
                style={{ fontSize: ".9rem" }}
              >
                {item.title}
              </label>
              <item.component
                type={item.type}
                options={item.options}
                disabled
                key={`item-${i + 1}`}
                className="bg-white cursor-pointer"
              />
            </FormGroup>
          );
        })}
      </Col>
    </Col>
  );
}
