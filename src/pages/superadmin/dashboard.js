import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "shards-react";
import { useDispatch, useSelector } from "react-redux";
import Charts from "../../components/chart";
import PageTitle from "../../components/common/PageTitle";
import { statsEndpoint } from "../../apiConstants/apiConstants";
import { getSuperAdminStats } from "../../actions/superadmin/getStats";
import CustomStats from '../../components/CustomStats';

export default function Dashbooard() {
  const [stats, setStats] = useState();
  const statsState = useSelector((state) => state.stats);
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    dispatch(getSuperAdminStats(statsEndpoint));
  }, []);
  useEffect(() => {
    statsState.data && setStats(statsState.data);
    // setArr([ ...statsState.data ]);
    console.log('stats', statsState.data);
  }, [statsState]);

  // let arr = []
  // useEffect(() => {
  //   if (stats) {
  //     arr = [
  //       stats.Admin,
  //       stats.Dietitian,
  //       stats.Patient,
  //       stats.SuperAdmin
  //     ]
  //   }
  // }, [stats]);

  return (
    <Container>
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Overview"
          subtitle="Dashboard"
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
      <Row>
        {arr.map((stats, idx) => (
          <Col className="col-lg mb-4" key={idx}>
            <CustomStats />
          </Col>
        ))}
      </Row>
        
    </Container>
  );
}
