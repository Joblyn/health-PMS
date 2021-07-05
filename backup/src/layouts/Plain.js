import React from "react";
import { Container } from "shards-react";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg';

export default function Plain({ children }) {
  return (
    <Container fluid className="main-content main-content-container px-0">
      <div className="d-flex justify-content-center bg-white py-3 header-navbar sticky-top">
        <Link to="/">
          <img
            id="main-logo"
            className="d-inline-block align-middle mx-auto"
            style={{ maxWidth: "90px" }}
            // src={require("../images/logo-1200.png")}
            // src='../images/logo.jpg'
            src={logo}
            // alt="workcradle"
            alt="tnnafrica"
          />
        </Link>
      </div>
      {children}
    </Container>
  );
}
