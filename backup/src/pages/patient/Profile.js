import React from 'react';
import { Container, Row } from 'reactstrap';
import PageTitle from "../../components/common/PageTitle";

export default function PatientProfile() {

  return (
    <Container style={{ minHeight: '100vh'}}>
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Profile"
          subtitle="Dashboard"
          className="text-sm-left"
        />
      </Row>
    </Container>
  )
}