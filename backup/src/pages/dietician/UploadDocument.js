import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Col,
  Row,
  Form,
  FormInput,
  FormGroup,
  Button,
  Card,
  CardHeader,
  Alert,
} from "shards-react";
import nProgress from "nprogress";
import PageTitle from "../../components/common/PageTitle";
import CustomFileUpload from "../../components/components-overview/CustomFileUpload";
import CustomSelect from "../../components/components-overview/CustomSelect";
import { getAllPatients } from "../../actions/superadmin/patients";
import { getPatients, createDocument } from "../../apiConstants/apiConstants";

export default function UploadDocument() {
  let dietitianId = JSON.parse(localStorage.getItem("loggedInUser")).id;
  let companyCode = JSON.parse(localStorage.getItem("loggedInUser")).companyCode;  const allPatients = useSelector((state) => state.allPatients);
  const [patients, setPatients] = useState([]);
  const dispatch = useDispatch();
  const [docName, setDocName] = useState();
  const [file, setFile] = useState();
  const [createdFor, setCreatedFor] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    dispatch(getAllPatients(getPatients));
  }, []);
  useEffect(() => {
    setPatients(
      allPatients.data &&
        allPatients.data.results.filter(
          (patient) =>
            patient.companyCode === companyCode &&
            patient.assignedDietitian === dietitianId
        )
    );
  }, [allPatients]);

  const submitForm = () => {
    const createdBy = JSON.parse(localStorage.getItem("loggedInUser")).id;
    const formData = new FormData();
    formData.append("docName", docName);
    formData.append("File", file);
    formData.append("createdFor", createdFor);
    formData.append("createdBy", createdBy);
    formData.append("companyCode", companyCode);

    let localUrl = "https://dev-workcradle.herokuapp.com/api/";
    let prodUrl = "https://dev-workcradle.herokuapp.com/api/";
    let baseUrl = process.env.NODE_ENV === "production" ? prodUrl : localUrl;
    const endpoint = baseUrl + createDocument;
    const token = JSON.parse(localStorage.getItem("tokens")).access.token;
    const bearerToken = "Bearer " + token;
    nProgress.start();
    fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        nProgress.done();
        nProgress.remove();
        setSuccess(true);
        setIsLoading(false);
      })
      .catch((err) => {
        nProgress.done();
        nProgress.remove();
        alert("An error occured, please try again");
        window.location.reload();
      });
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
        window.location.reload();
      }, 2000);
    }
  }, [success]);

  return (
    <Container fluid className="main-content-container px-4 pb-4">
      {success && (
        <Container fluid className="px-0 sticky-top">
          <Alert className="mb-0 text-center">
            <i className="fa fa-info mx-2"></i>Uploaded Document to patient
          </Alert>
        </Container>
      )}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Patient Diet Plan"
          subtitle="Dashboard"
          className="text-sm-left"
        />
      </Row>
      <Col className="p-3">
        <Card style={{ maxWidth: "506px" }} className="mx-auto">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Upload Document</h6>
          </CardHeader>
          <Form className="p-4" id="Upload_Diet_Plan" onSubmit={submitForm}>
            <FormGroup className="mb-3">
              <label>Document Name</label>
              <FormInput
                required
                onChange={({ target }) => setDocName(target.value)}
                name="docName"
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <label>Document</label>
              <CustomFileUpload
                label="Document"
                required
                handleChange={setFile}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <label>Select Patient</label>
              {patients && (
                <CustomSelect
                  label="Patient"
                  options={patients}
                  setSelectedPatient={setCreatedFor}
                />
              )}
            </FormGroup>

            <Button
              form="Upload_Diet_Plan"
              className="mt-1"
              disabled={isLoading}
            >
              Upload
            </Button>
          </Form>
        </Card>
      </Col>
    </Container>
  );
}
