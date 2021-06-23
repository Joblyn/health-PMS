import React from "react";
import { Col, Row } from "shards-react";
import { Link } from "react-router-dom";

export default function Interface() {
  return (
    <Col
      className="d-flex justify-content-center align-items-center"
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Row
        noGutters
        className="page-header py-4 px-4 bg-white card"
        style={{
          width: " 100%",
          maxWidth: "600px",
        }}
      >
        <h4 className="mb-4 text-left">Continue as:</h4>
        <Row className="d-flex justify-content-center">
          <Col className="d-flex flex-column justify-content-center align-items-center col-lg-12 col-md-12 col-sm-12">
            <Link
              to="/superadmin/login"
              className="m-3"
              style={{ width: "fit-content" }}
            >
              <div
                className="home-link d-flex flex-column align-items-center btn"
                style={{
                  border: "1px solid #52b5e9",
                  width: "220px",
                  height: "200px",
                }}
              >
                <img
                  id="dietician-avatar"
                  className="d-inline-block align-middle "
                  style={{ borderRadius: "50%" }}
                  width="120px"
                  height="auto"
                  src={require("../images/avatars/portrait.jpg")}
                  alt="workcradle"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    color: "#3d5170",
                  }}
                  className="my-2 card-header"
                >
                  SuperAdmin
                </p>
              </div>
            </Link>
          </Col>
          <Col className="d-flex flex-column justify-content-center col-lg-6 col-md-6 col-sm-12">
            <Link to="/dietician/login" className="m-3">
              <div
                className="home-link d-flex flex-column align-items-center btn"
                style={{
                  border: "1px solid  #52b5e9",
                  width: "220px",
                  height: "200px",
                }}
              >
                <img
                  id="dietician-avatar"
                  className="d-inline-block align-middle "
                  style={{ borderRadius: "50%" }}
                  width="120px"
                  height="auto"
                  src={require("../images/avatars/portrait.jpg")}
                  l
                  alt="health.workcradle"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    color: "#3d5170",
                  }}
                  className="my-2 card-header"
                >
                  Dietician
                </p>
              </div>
            </Link>
          </Col>
          <Col className="d-flex flex-column justify-content-center col-lg-6 col-md-6 col-sm-12">
            <Link to="/patient/login" className="m-3">
              <div
                className="d-flex flex-column align-items-center btn"
                style={{
                  border: "1px solid  #52b5e9",
                  width: "220px",
                  height: "200px",
                }}
              >
                <img
                  id="patient-avatar"
                  className="d-inline-block align-middle"
                  width="120px"
                  height="auto"
                  style={{ borderRadius: "50%" }}
                  src={require("../images/avatars/portrait.jpg")}
                  alt="workcradle"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    color: "#3d5170",
                  }}
                  className="my-2 card-header"
                >
                  Patient
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      </Row>
    </Col>
  );
}
