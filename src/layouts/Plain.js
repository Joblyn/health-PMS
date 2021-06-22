import React from "react";
import { Container } from "shards-react";
import { Link } from "react-router-dom";

export default function Plain({ children }) {
  return (
    <Container fluid className="main-content main-content-container px-0">
      <div className="d-flex justify-content-center bg-white py-3 header-navbar sticky-top">
        <Link to="/">
          <img
            id="main-logo"
            className="d-inline-block align-middle mx-auto"
            style={{ maxWidth: "200px" }}
            src={require("../images/logo-1200.png")}
            alt="workcradle"
          />
        </Link>
      </div>
      {children}
    </Container>
  );
}
