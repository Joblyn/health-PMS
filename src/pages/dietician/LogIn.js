import React from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  FormInput,
  Col,
} from "shards-react";
import { Link } from "react-router-dom";

export default function DieticianLogin() {
  return (
    <Container
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
        <h4 className="mb-4 text-center">Login</h4>
        <Form id="login">
          <FormGroup>
            <label htmlFor="emailAdress" style={{ fontSize: "1rem" }}>
              Email
            </label>
            <FormInput
              id="emailAddress"
              name="emailAddressInput"
              type="email"
              placeholder="Email"
              className="form-custom"
              style={{ padding: ".5rem .75rem", fontSize: ".9rem" }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <FormInput
              id="password"
              name="passwordInput"
              type="password"
              placeholder="Password"
              style={{ padding: ".5rem .75rem", fontSize: ".9rem" }}
            />
          </FormGroup>
          <Col className="text-right form-group">
            <Link to="#">Forgot password?</Link>
          </Col>
          <Col className="p-0">
            <Button
              type="submit"
              className="w-100 bg-custom btn-custom"
              style={{ fontSize: "1rem" }}
            >
              Log In
            </Button>
          </Col>
        </Form>
      </Col>
      <Col className="text-center mt-3">
        Don't have an account? <Link to="/patient/signup" className="text-decoration-none">Sign Up</Link>
      </Col>
    </Container>
  );
}
