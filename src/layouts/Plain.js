import React from "react";
import { Container } from "shards-react";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/logo-900.png";

export default function Plain({ children }) {
  const authState = JSON.parse(localStorage.getItem('loggedInUser'))

  if(authState && authState.role){  
    if(authState.role === 'admin') {
      return authState.isSuperAdmin ? <Redirect to="/superadmin/dashboard" />: <Redirect to="/admin/profile"/>
    }
    if (authState.role === 'dietitian') {
      return <Redirect to="/dietitian/profile" />
    }
    if(authState.role === 'patient') {
     return <Redirect to="/patient/profile" />
    }
  }

  return (
    <Container fluid className="main-content main-content-container px-0">
      <div className="d-flex justify-content-center bg-white py-3 header-navbar sticky-top">
        <Link to="/">
          <img
            id="main-logo"
            className="d-inline-block align-middle mx-auto"
            style={{ maxWidth: "150px" }}
            src={logo}
            alt="health.workcradle"
          />
        </Link>
      </div>
      {children}
    </Container>
  );
}
