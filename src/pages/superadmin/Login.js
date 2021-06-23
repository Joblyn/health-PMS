import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  FormInput,
  Col,
  FormFeedback,
} from "shards-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { useHistory } from "react-router-dom";
import { loginEndpoint } from "../../apiConstants/apiConstants";

export default function SuperAdminLogin() {
  const [control, setControl] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.authState);
  const history = useHistory();


  useEffect(() => {
    if(authState.isSuccessful && authState.isLoggedIn) {
      localStorage.setItem('token', JSON.stringify(authState.data.token));
      localStorage.setItem('loggedInUser', JSON.stringify(authState.data.userDetails));
      history.push('/superadmin/dashboard');
    } else if (authState.isSuccessful === false && authState.error) {
      setErrorMessage(authState.error);
    }
  }, [authState]);

  const handleChange = ({ target }) => {
    setControl({
      ...control,
      [target.name]: target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEndpoint, control));
  }

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
        <Form id="superAdmin_login" onSubmit={handleSubmit}>
          {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
          <FormGroup>
            <label htmlFor="emailAdress" style={{ fontSize: "1rem" }}>
              Email
            </label>
            <FormInput
              id="emailAddress"
              name="email"
              type="email"
              placeholder="Email"
              className="form-custom"
              style={{ padding: ".5rem .75rem", fontSize: ".9rem" }}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <FormInput
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              style={{ padding: ".5rem .75rem", fontSize: ".9rem" }}
              onChange={handleChange}
            />
          </FormGroup>
          <Col className="p-0">
            <Button
              type="submit"
              className="w-100 bg-custom btn-custom"
              style={{ fontSize: "1rem" }}
              form="superAdmin_login"
            >
              Log In
            </Button>
          </Col>
        </Form>
      </Col>
    </Container>
  );
}
