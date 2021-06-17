import React from "react";
import { Container, Col, Row } from "shards-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
      <Col className="d-flex justify-content-center pt-5">
        <Row
          noGutters
          className="page-header py-4 px-4 bg-white card"
          style={{
            width: " 100%",
            maxWidth: "500px",
          }}
        >
          <h2 className="mb-4" style={{ width: "100%" }}>
            Welcome!
          </h2>
          <h4 className="mb-4 text-left">Continue as:</h4>
          <Row className="d-flex justify-content-center">
            <Col className="d-flex flex-column justify-content-center col-lg 6 col-md-6 col-sm-12">
              <Link to="#">
                <div className="home-link d-flex flex-column align-items-center">
                  <img
                    id="dietician-avatar"
                    className="d-inline-block align-middle "
                    style={{ borderRadius: "50%" }}
                    width="150px"
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
                    Dietician
                  </p>
                </div>
              </Link>
            </Col>
            <Col className="d-flex flex-column justify-content-center col-lg 6 col-md-6 col-sm-12">
              <Link to="#">
                <div className="d-flex flex-column align-items-center">
                  <img
                    id="patient-avatar"
                    className="d-inline-block align-middle"
                    width="150px"
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
