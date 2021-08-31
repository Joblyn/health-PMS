import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "shards-react";
import { Link } from "react-router-dom";

import { allCompanies } from "../apiConstants/apiConstants";
import { getAllCompanies } from "../actions/getAllCompanies";
import PageSpinner from "../components/common/PageSpinner";
import SidebarSearch from "../components/layout/MainSidebar/SidebarSearch";

export default function Landing() {
  const dispatch = useDispatch();
  const AllCompanies = useSelector((state) => state.allCompanies);
  const [companies, setCompanies] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    dispatch(getAllCompanies(allCompanies));
  }, []);

  useEffect(() => {
    if (AllCompanies.isSuccessful && AllCompanies.data) {
      setCompanies(AllCompanies.data);
    }
  }, [AllCompanies]);

  useEffect(() => {
    companies && setItems(companies);
  }, [companies]);

  useEffect(() => {
    if (searchTerm) {
      setItems(companies.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
      setItems(companies);
    }
  }, [searchTerm]);

  return (
    <Col className="d-flex justify-content-center py-5 landing">
      <Row
        noGutters
        className="page-header py-5 px-4 bg-white card landing-cont"
      >
        <h2 className="mb-3" style={{ fontWeight: "600" }}>
          Welcome!
        </h2>
        <Row style={{ alignItems: "center", margin: 0 }}>
          <h4 className="mb-2 text-left mr-4">Select Company:</h4>
          <SidebarSearch homePage setSearchTerm={setSearchTerm} />
        </Row>

        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "30vh" }}
        >
          {items ? <>
          <Link to="/register_company">
            <div
              className="btn-custom bg-custom m-3 btn card d-flex justify-content-center align-items-center btn btn-outline-primary"
              style={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: "1.2rem",
                width: "200px",
                height: "200px",
                border: "1px solid #52b5e9",
                boxShadow: "none"
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>+</span> Register Company
            </div>
          </Link>
            {items.map((item, i) => (
              <Link
                to="/interface"
                key={`item-${i + 1}`}
                onClick={() =>
                  localStorage.setItem("companyCode", item.companyCode)
                }
              >
                <div
                  className="btn-custom bg-custom m-3 btn card d-flex justify-content-center align-items-center btn btn-outline-primary"
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "1.2rem",
                    width: "200px",
                    height: "200px",
                    border: "1px solid #52b5e9"
                  }}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </>
           : (
            <PageSpinner />
          )}
        </Row>
      </Row>
    </Col>
  );
}
