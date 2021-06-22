import React from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Button,
  Card,
  CardHeader,
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import CustomFileUpload from "../../components/components-overview/CustomFileUpload";
import CustomSelect from "../../components/components-overview/CustomSelect";

export default function UploadDietPlan() {
  return (
    <Container fluid className="main-content-container px-4 pb-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Patient Diet Plan"
          subtitle="Dashboard"
          className="text-sm-left"
        />
      </Row>
      <Col className="p-3">
        <Card style={{ maxWidth: "506px" }}
        className="mx-auto">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Upload Client Diet Plan</h6>
          </CardHeader>
          <Form
            className="p-4"
            id="Upload_Diet_Plan"
          >
            <FormGroup className="mb-3">
              <label>Document</label>
              <CustomFileUpload label="Document" />
            </FormGroup>

            <FormGroup className="mb-3">
              <label>Select Patient</label>
              <CustomSelect label="Patient" />
            </FormGroup>

            <Button form="Upload_Diet_Plan" className="mt-1">Upload Diet Plan</Button>
          </Form>
        </Card>
      </Col>
    </Container>
  );
}
