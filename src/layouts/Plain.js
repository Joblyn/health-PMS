import React from "react";
import { Container } from "shards-react";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/logo.png";

export default function Plain({ children }) {
  const authState = JSON.parse(localStorage.getItem('loggedInUser'))

  if(authState && authState.role){
    return <Redirect to={`/${authState.role}/profile`}/>
  }

  return (
    <Container fluid className="main-content main-content-container px-0">
      <div className="d-flex justify-content-center bg-white py-3 header-navbar sticky-top">
        <Link to="/">
          <img
            id="main-logo"
            className="d-inline-block align-middle mx-auto"
            style={{ maxWidth: "120px" }}
            src={logo}
            alt="health"
          />
        </Link>
      </div>
      {children}
    </Container>
  );
}
