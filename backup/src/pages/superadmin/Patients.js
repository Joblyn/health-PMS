import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Card, CardHeader, Button } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import avatar1 from "../../images/avatars/1.jpg";
import { getAllPatients } from "../../actions/superadmin/patients";
import { getPatients } from "../../apiConstants/apiConstants";
import PageSpinner from "../../components/common/PageSpinner";

export default function CompanyPatients() {
  const history = useHistory();
  const dispatch = useDispatch();
  const allPatients = useSelector((state) => state.allPatients);
  const [patients, setPatients] = useState([]);

  let companyCode = JSON.parse(localStorage.getItem("loggedInUser")).companyCode;

  useEffect(() => {
    dispatch(getAllPatients(getPatients));
  }, []);
  
  useEffect(() => {
    console.log(allPatients.data && allPatients.data.results);
    setPatients(
      allPatients.data &&
        allPatients.data.results.filter(
          (item) => item.companyCode === companyCode
        )
    );
  }, [allPatients]);

  if(!patients) {
    return <PageSpinner />
  }

  return (
    <Container fluid className="main-content-container px-4 pb-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Patients"
          subtitle="Dashboard"
          className="text-sm-left"
        />
      </Row>
      <Row
        style={{
          display: "grid",
          gridGap: "20px",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          minHeight: '65vh',
        }}
        className="m-0"
      >
        {patients && patients.length ? (
          patients.map((patient, i) => {
            return (
              <Col className="p-0" key={`patient-${i + 1}`}>
                <Card small className="p-3">
                  <CardHeader className="border-bottom text-center">
                    <div className="mb-3 mx-auto">
                      <p
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          color: "#52b5e9",
                        }}
                      >
                        {patient.assignedDietitian !== undefined
                          ? "Assigned"
                          : "Unassigned"}
                      </p>
                      <img
                        className="rounded-circle"
                        src={avatar1}
                        alt="John Doe"
                        width="110px"
                      />
                    </div>
                    <h4 className="mb-0" style={{ fontSize: "1.3rem" }}>
                      {patient.name}
                    </h4>
                    <span
                      className="text-muted d-block mb-1"
                      style={{ fontSize: ".9rem" }}
                    >
                      {patient.email}
                    </span>
                    <span
                      className="text-muted d-block mb-2"
                      style={{ fontSize: ".9rem" }}
                    >
                      {patient.phone}
                    </span>
                  </CardHeader>
                  <div>
                    <div>
                      <strong
                        className="text-muted d-block mb-1 mt-2"
                        style={{ fontSize: ".955rem" }}
                      >
                        Health Conditions
                      </strong>
                      <p
                        style={{
                          fontSize: ".85rem",
                          lineHeight: "1.2rem",
                          width: "100%",
                          height: "38px",
                          // whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineClamp: "2",
                        }}
                        className="mb-2"
                      >
                        {patient.healthCondition &&
                          patient.healthCondition.join(", ").toString()}
                      </p>
                    </div>
                  </div>
                  <Button
                    pill
                    outline
                    size="sm"
                    className="mb-2"
                    style={{ fontSize: ".85rem" }}
                    onClick={() => {
                      localStorage.setItem("patient", JSON.stringify(patient));
                      history.push("/superadmin/patient/details");
                    }}
                  >
                    View
                  </Button>
                </Card>
              </Col>
            );
          })
        ) : (
          <h5 className="text-muted">There are no patients registered.</h5>
        )}
        
      </Row>
    </Container>
  );
}
