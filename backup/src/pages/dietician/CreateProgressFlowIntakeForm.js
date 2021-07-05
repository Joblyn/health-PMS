import React from "react";
import { Container, Col, Row } from "shards-react";
import FormItemCatalogue from "../../components/components-overview/FormItemCatalogue";
import PageTitle from "../../components/common/PageTitle";
import FormBuilder from "../../components/components-overview/FormBuilder";

export default function CreateProgressFlowIntakeForm() {
  return (
    <Container fluid>
      <Col className="main-content-container px-4 pb-5">
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="Progress Intake Form"
            subtitle="Dashboard"
            className="text-sm-left mb-3"
          />
        </Row>
        <Row>
          <FormItemCatalogue />
          <FormBuilder />
        </Row>
      </Col>
    </Container>
  );
}
