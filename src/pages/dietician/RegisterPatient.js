import React from "react";
import {
  Container,
  FormCheckbox,
  FormInput,
  Button,
  Form,
  FormGroup,
  Col,
  Row,
} from "shards-react";

export default function RegisterPatient() {
  return <Container
  fluid
  className="d-flex flex-column align-items-center py-5 px-2 m-0 w-100"
>
  <Col
    className="bg-white card p-4"
    style={{
      width: "100%",
      maxWidth: "500px",
    }}
  >
    <h4 className="mb-4 text-center">Register Patient</h4>
    <Form id="login">
      <Row>
        <Col className="col-sm-12 col-md-6 col-lg-12">
          <FormGroup>
            <label htmlFor="firstName" style={{ fontSize: "1rem" }}>
              First name
            </label>
            <FormInput
              required
              id="firstName"
              name="firstNameInput"
              type="text"
              placeholder="First name"
              className="form-custom"
              style={{ padding: ".5rem .75rem", fontSize: ".9rem" }}
            />
          </FormGroup>
        </Col>
        <Col className="col-sm-12 col-md-6 col-lg-12">
          <FormGroup>
            <label htmlFor="lastName" style={{ fontSize: "1rem" }}>
              Last Name
            </label>
            <FormInput
              required
              id="lastName"
              name="lastNameInput"
              type="text"
              placeholder="Last name"
              className="form-custom"
              style={{ padding: ".5rem .75rem", fontSize: ".9rem" }}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <label htmlFor="emailAdress">Email</label>
        <FormInput
          required
          id="emailAddress"
          name="emailAddressInput"
          type="email"
          placeholder="Email"
          className="form-custom"
          style={{ padding: ".5rem .75rem", fontSize: ".9rem" }}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="phoneNumber">Phone number</label>
        <FormInput
          required
          id="phoneNumber"
          name="phoneNumberInput"
          type="text"
          placeholder="Phone Number"
          className="form-custom"
          style={{ padding: ".5rem .75rem", fontSize: ".9rem" }}
        />
      </FormGroup>
      <FormGroup>
        <label>Health Condition</label>
        <fieldset style={{fontSize: ".85rem"}}>
          <FormCheckbox>Obese</FormCheckbox>
          <FormCheckbox>Diabetic</FormCheckbox>
          <FormCheckbox>Hypertensive</FormCheckbox>
          <FormCheckbox>Special Condition(e.g heart disease)</FormCheckbox>
          <FormInput
            required
            type="text"
            name="others"
            placeholder="Other"
            id="health-other"
          />
        </fieldset>
      </FormGroup>
      <Col className="p-0">
        <Button
          type="submit"
          className="w-100 bg-custom btn-custom"
          style={{ fontSize: "1rem" }}
        >
          Register
        </Button>
      </Col>
    </Form>
  </Col>
</Container>;
}
