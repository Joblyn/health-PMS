import React from 'react';
import { Container } from 'shards-react';

export default function CreateDietician() {
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
        <Form id="dietician_Login" onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="emailAdress" style={{ fontSize: "1rem" }}>
              Email
            </label>
            <FormInput
              required
              onChange={handleChange}
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
              required
              onChange={handleChange}
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
              form="dietician_Login"
            >
              Create Dietician
            </Button>
          </Col>
        </Form>
      </Col>
    </Container>
  )
}