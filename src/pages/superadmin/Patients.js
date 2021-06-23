import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Card, CardHeader, Button } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import avatar1 from "../../images/avatars/1.jpg";
import avatar2 from "../../images/avatars/2.jpg";
import avatar3 from "../../images/avatars/3.jpg";
import { getAllPatients } from '../../actions/superadmin/patients';
import { getPatients } from '../../apiConstants/apiConstants';

export default function CompanyPatients() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllPatients(getPatients));
  }, []);

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
        }}
        className="m-0"
      >
        <Col className="p-0">
          <Card small className="p-3">
            <CardHeader className="border-bottom text-center">
              <div className="mb-3 mx-auto">
                <img
                  className="rounded-circle"
                  src={avatar1}
                  alt="John Doe"
                  width="110px"
                />
              </div>
              <h4 className="mb-0" style={{ fontSize: "1.3rem" }}>John Doe</h4>
              <span
                className="text-muted d-block mb-1"
                style={{ fontSize: ".9rem" }}
              >
                oaikhenahjob@gmail.com
              </span>
              <span
                className="text-muted d-block mb-2"
                style={{ fontSize: ".9rem" }}
              >
                08136767175
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
                <p style={{ fontSize: ".85rem", lineHeight: "1.2rem" }}>
                  Obese, Hypertensive, High Blood Pressure, Rhuematism
                </p>
              </div>
            </div>
            <Button pill outline size="sm" className="mb-2" style={{fontSize: ".85rem"}} onClick={() => history.push('/user-profile-lite')}>
               View
            </Button>
          </Card>
        </Col>
        <Col className="p-0">
          <Card small className="p-3">
            <CardHeader className="border-bottom text-center">
              <div className="mb-3 mx-auto">
                <img
                  className="rounded-circle"
                  src={avatar2}
                  alt="John Doe"
                  width="110px"
                />
              </div>
              <h4 className="mb-0" style={{ fontSize: "1.3rem" }}>Mac Phearson</h4>
              <span
                className="text-muted d-block mb-1"
                style={{ fontSize: ".9rem" }}
              >
                macphearson1@gmail.com
              </span>
              <span
                className="text-muted d-block mb-2"
                style={{ fontSize: ".9rem" }}
              >
                08136767175
              </span>
            </CardHeader>
            <div>
              <div>
                <strong
                  className="text-muted d-block mb-1 mt-2"
                  style={{ fontSize: ".955rem"}}
                >
                  Health Conditions
                </strong>
                <p style={{ fontSize: ".85rem", lineHeight: "1.2rem" }}>
                  Obese, Hypertensive, High Blood Pressure, Rhuematism
                </p>
              </div>
            </div>
            <Button pill outline size="sm" className="mb-2" style={{fontSize: ".85rem"}}>
               View
            </Button>
          </Card>
        </Col>
        <Col className="p-0">
          <Card small className="p-3">
            <CardHeader className="border-bottom text-center">
              <div className="mb-3 mx-auto">
                <img
                  className="rounded-circle"
                  src={avatar3}
                  alt="John Doe"
                  width="110px"
                />
              </div>
              <h4 className="mb-0" style={{ fontSize: "1.3rem" }}>Steve Jobs</h4>
              <span
                className="text-muted d-block mb-1"
                style={{ fontSize: ".9rem" }}
              >
                stevejobs349@gmail.com
              </span>
              <span
                className="text-muted d-block mb-2"
                style={{ fontSize: ".9rem" }}
              >
                08136767175
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
                <p style={{ fontSize: ".85rem", lineHeight: "1.2rem" }}>
                  Obese, Hypertensive, High Blood Pressure, Rhuematism
                </p>
              </div>
            </div>
            <Button pill outline size="sm" className="mb-2" style={{fontSize: ".85rem"}}>
               View
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
