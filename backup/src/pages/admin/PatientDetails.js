import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  FormGroup,
  Alert,
  FormInput,
} from "shards-react";
import {
  getDietitians,
  editPatientEndpoint,
  deletePatientEndpoint
} from "../../apiConstants/apiConstants";

import PageTitle from "../../components/common/PageTitle";
import avatar1 from "../../images/avatars/1.jpg";
import { getAllDietitians } from "../../actions/superadmin/dietitian";
import { editPatient, deletePatientAction } from "../../actions/superadmin/patients";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import CustomSelect from "../../components/components-overview/CustomSelect";
import PageSpinner from "../../components/common/PageSpinner";

const PatientDetails = () => {
  const patient = JSON.parse(localStorage.getItem("patient"));
  const companyCode = JSON.parse(localStorage.getItem("loggedInUser")).companyCode;
  const dispatch = useDispatch();
  const allDietitians = useSelector((state) => state.allDietitians);
  const editedPatient = useSelector((state) => state.editPatient);
  const [selectedDietitian, setSelectedDietitian] = useState();
  const [assignedDietitian, setAssignedDietitian] = useState();
  const [popUp, setPopUp] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editted, setEditted] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [foodPreference, setFoodPreference] = useState([
    ...patient.foodPreference,
  ]);
  const [healthCondition, setHealthCondition] = useState([
    ...patient.healthCondition,
  ]);
  const [currentFoodPreference, setCurrentFoodPreference] = useState("");
  const [currentHealthCondition, setCurrentHealthCondition] = useState("");
  const deletedPatient = useSelector(state => state.deletePatient); 

  const history = useHistory();

  useEffect(() => {
    if (editted && editedPatient.isSuccessful) {
      setPopUp(false);
      setAlert(true);
    }
  }, [editedPatient, editted]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
        history.push("/superadmin/patients");
      }, 2000);
    }
  }, [alert]);

  const handleSubmit = () => {
    const control = {
      ...patient,
      age: `${patient.age}`,
      weight: `${patient.weight}`,
      assignedDietitian: selectedDietitian,
    };
    delete control.createdAt;
    delete control.updatedAt;
    delete control.id;
    let endpoint = editPatientEndpoint + patient.id;
    dispatch(editPatient(endpoint, control));
    setEditted(true);
  };

  useEffect(() => {
    let endpoint = getDietitians + patient.companyCode;
    dispatch(getAllDietitians(endpoint));
  }, []);

  useEffect(() => {
    if (allDietitians.isSuccessful) {
      let dietitianArr = allDietitians.data.filter(
        (item) => item.Dietitian.id === patient.assignedDietitian
      );
      console.log(allDietitians);
      console.log(dietitianArr[0]);
      setAssignedDietitian(dietitianArr[0] && dietitianArr[0].Dietitian);
    }
  }, [allDietitians]);
  console.log(assignedDietitian);

  const close = () => {
    setPopUp(false);
    setSelectedDietitian("");
  };

  const addFoodPreference = () => {
    setFoodPreference([...foodPreference, currentFoodPreference]);
  };

  const addHealthCondition = () => {
    setHealthCondition([...healthCondition, currentHealthCondition]);
  };

  const [control, setControl] = useState(patient);

  const handleChange = ({ target }) => {
    setControl({ ...control, [target.name]: target.value });
  };

  const restore = () => {
    setControl(patient);
  };

  useEffect(() => {
    if(deletedPatient.isSuccessful) {
      history.push('/superadmin/patients');
    }
  }, [deletedPatient]);

  const deletePatient = () => {
    let endpoint = deletePatientEndpoint + control.id;
    dispatch(deletePatientAction(endpoint))
  }

  const submitChanges = () => {
    let endpoint = editPatientEndpoint + patient.id;
    console.log(endpoint);
    delete control.createdAt;
    delete control.updatedAt;
    delete control.id;
    let payload = {
      ...control,
      healthCondition,
      foodPreference,
      age: `${control.age}`,
      weight: `${control.weight}`,
    };
    console.log(payload);
    dispatch(editPatient(endpoint, payload));
    setEditted(true);
  };

  if (!patient) {
    return <PageSpinner />;
  }

  return (
    <Container fluid className="main-content-container px-4">
      {alert && (
        <Container fluid className="px-0 sticky-top">
          <Alert className="mb-0 text-center">
            <i className="fa fa-info mx-2"></i>Editted Patient Profile.
          </Alert>
        </Container>
      )}
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Patient Profile"
          subtitle="Overview"
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
      <div
        className={`${popUp || deletePopup ? "d-block" : "d-none"}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 10,
          background: "rgba(0,0,0,.24",
        }}
      ></div>
      <div
        className={`${
          deletePopup ? "d-flex" : "d-none"
        } justify-content-center align-items-center`}
        style={{ width: "100%" }}
      >
        <Card
          className={`p-3 mx-auto`}
          style={{ position: "absolute", zIndex: 1000, width: 400, top: "30%" }}
        >
          <div className="text-center">
            <h5>Delete Dietitian?</h5>
          </div>
          <div className="d-flex flex-row justify-content-between mt-3">
            <Button onClick={() => setDeletePopup(false)}>Cancel</Button>
            <Button theme="danger" onClick={deletePatient}>
              Delete
            </Button>
          </div>
        </Card>
      </div>
      <Col
        lg="12"
        className="d-flex flex-column justify-content-center align-items-center mb-5"
      >
        <Card
          className={`${popUp ? "d-block" : "d-none"} pb-3`}
          style={{ position: "absolute", zIndex: 1000, width: 400, top: "30%" }}
        >
          <span
            class="material-icons"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
            }}
            onClick={() => close()}
          >
            close
          </span>
          <CardHeader className="border-bottom">
            Select Dietitian to assign to
          </CardHeader>
          <Col className={`p-3 pb-0 ${selectedDietitian && "border-bottom"}`}>
            <fieldset>
              {allDietitians.data &&
                allDietitians.data
                  .filter((item) => item.Dietitian.companyCode === companyCode)
                  .map((dietitian, i) => {
                    return (
                      <FormGroup
                        key={`item-${i + 1}`}
                        style={{ cursor: "pointer" }}
                        className="mb-1"
                      >
                        <input
                          type="radio"
                          value={dietitian.Dietitian.id}
                          onChange={({ target }) =>
                            setSelectedDietitian(target.value)
                          }
                          className="mr-2"
                        />
                        <span>{dietitian.Dietitian.name}</span>
                      </FormGroup>
                    );
                  })}
            </fieldset>
          </Col>
          {selectedDietitian && (
            <Col className="pt-2">
              <Button
                disabled={selectedDietitian ? false : true}
                className="ml-3"
                onClick={handleSubmit}
              >
                Assign
              </Button>
            </Col>
          )}
        </Card>
        <Card style={{ width: "100%", maxWidth: "500px" }} className="pb-3">
          <p
            style={{
              position: "absolute",
              top: "10px",
              right: "15px",
              color: "#52b5e9",
              border: "1px solid #52b5e9",
              borderRadius: "50px",
            }}
            className="py-1 px-2"
          >
            {control.assignedDietitian !== undefined
              ? "Assigned"
              : "Unassigned"}
          </p>
          <CardHeader className="border-bottom text-center">
            <div className="mb-3 mx-auto">
              <img
                className="rounded-circle"
                src={avatar1}
                alt={control.name}
                width="110"
              />
            </div>
            {!edit ? (
              <h4 className="mb-0">{control.name}</h4>
            ) : (
              <FormInput
                type="email"
                defaultValue={control.name}
                name="name"
                onChange={handleChange}
              />
            )}
            {!edit ? (
              <span className="text-muted d-block mb-2">{control.email}</span>
            ) : (
              <FormInput
                type="email"
                defaultValue={control.email}
                name="email"
                onChange={handleChange}
              />
            )}
            {!edit ? (
              <span className="text-muted d-block mb-2">{control.phone}</span>
            ) : (
              <FormInput
                defaultValue={control.phone}
                name="phone"
                disabled={!edit}
                onChange={handleChange}
              />
            )}
            {
              <Button
                pill
                outline
                size="sm"
                className="mb-2"
                onClick={() => setPopUp(true)}
              >
                <i className="material-icons mr-1">person_add</i> Assign to
                Dietitian
              </Button>
            }
          </CardHeader>
          <Col className={`border-bottom ${edit && "pb-3"}`}>
            <h5 className="mb-1 mt-1">Bio Data</h5>
            <Col
              className={`d-flex flex-row align-items-center ${edit && "mb-2"}`}
            >
              <h6 className={`mr-2 mb-0`}>Age:</h6>
              <FormInput
                defaultValue={`${control.age}`}
                disabled={!edit}
                style={
                  !edit
                    ? {
                        background: "transparent",
                        border: "none",
                        fontSize: "1rem",
                        color: "#5a6169",
                      }
                    : { fontSize: "1rem", color: "#5a6169" }
                }
                name="age"
                onChange={handleChange}
              />
            </Col>
            <Col className="d-flex flex-row align-items-center">
              <h6 className="mr-2 mb-0">Weight:</h6>
              <FormInput
                defaultValue={`${control.weight}`}
                disabled={!edit}
                name="weight"
                style={
                  !edit
                    ? {
                        background: "transparent",
                        border: "none",
                        fontSize: "1rem",
                      }
                    : { fontSize: "1rem" }
                }
                onChange={handleChange}
              />
            </Col>
          </Col>
          <Col className={`border-bottom ${edit && "pb-3"}`}>
            <h5 className="mb-1 mt-1">Health</h5>
            <Col className={`d-flex ${edit ? "flex-column mb-3" : "flex-row"}`}>
              <h6 className="mr-2 mb-0">Condition:</h6>
              {edit && (
                <div className="d-flex flex-row">
                  <FormInput
                    name="foodPreference"
                    placeholder="Add food item"
                    style={{ width: 200 }}
                    className="ml-3 mr-3"
                    onChange={({ target }) =>
                      setCurrentHealthCondition(target.value)
                    }
                  />
                  <Button onClick={addHealthCondition}>
                    <span>+</span>Add
                  </Button>
                </div>
              )}
              <span className={`${edit && "border-bottom"}`}>
                {healthCondition.join(", ").toString()}
              </span>
            </Col>
            <Col
              className={`d-flex flex-row align-items-center ${
                edit ? "mb-3" : ""
              }`}
            >
              <h6 className="mr-2 mb-0">Goal:</h6>
              <FormInput
                defaultValue={control.healthGoal}
                disabled={!edit}
                style={
                  !edit
                    ? {
                        background: "transparent",
                        border: "none",
                        fontSize: "1rem",
                        color: "#5a6169",
                      }
                    : { fontSize: "1rem", color: "#5a6169" }
                }
                name="healthGoal"
                onChange={handleChange}
              />
            </Col>
            <Col className={`d-flex ${edit ? "flex-column" : "flex-row"}`}>
              <h6 className="mr-2">Food Prefence:</h6>
              {edit && (
                <div className="d-flex flex-row">
                  <FormInput
                    name="foodPreference"
                    placeholder="Add food item"
                    style={{ width: 200 }}
                    className="ml-3 mr-3"
                    onChange={({ target }) =>
                      setCurrentFoodPreference(target.value)
                    }
                  />
                  <Button onClick={addFoodPreference}>
                    <span>+</span>Add
                  </Button>
                </div>
              )}
              <span className={`${edit && "border-bottom"}`}>
                {foodPreference.join(", ").toString()}
              </span>
            </Col>
          </Col>

          <Col className="d-flex flex-row mt-2 border-bottom">
            <h6 className="mr-2">Dietitian:</h6>
            <span>
              {assignedDietitian ? assignedDietitian.name : <em>Unassigned</em>}
            </span>
          </Col>
          <Col className="d-flex flex-row mt-2 mb-2 align-items-center">
            <h6 className="mr-2 mb-0">Subscription:</h6>
            <CustomSelect
              label=""
              options={[
                "Try Out Package",
                "Basic Package",
                "Platinum Package",
                "Premium Package",
              ]}
              type="edit"
              disabled={!edit}
              handleChange={handleChange}
              selected={control.subscriptionPackage}
            />
          </Col>
          <Col className="mb-5">
            <>
              <Col className="d-flex flex-row align-items-center mb-2">
                <h6 className="mr-2 mb-0">Subscription Start:</h6>
                {!edit ? (
                  control.subscriptionStartDate ? (
                    <FormInput
                      type="date"
                      name="subscriptionStartDate"
                      onChange={handleChange}
                      defaultValue={control.subscriptionStartDate}
                      disabled={!edit}
                      style={
                        edit
                          ? { width: 200, background: "transparent" }
                          : {
                              width: 200,
                              background: "transparent",
                              border: "none",
                            }
                      }
                    />
                  ) : (
                    <span>
                      <em>not set</em>
                    </span>
                  )
                ) : (
                  <FormInput
                    type="date"
                    name="subscriptionStartDate"
                    onChange={handleChange}
                    defaultValue={control.subscriptionStartDate}
                    style={{ width: 200 }}
                  />
                )}
              </Col>
              <Col className="d-flex flex-row align-items-center mb-2">
                <h6 className="mr-2 mb-0">Subscription End:</h6>
                {!edit ? (
                  control.subscriptionEndDate ? (
                    <FormInput
                      type="date"
                      name="subscriptionEndDate"
                      onChange={handleChange}
                      defaultValue={control.subscriptionEndDate}
                      disabled={!edit}
                      style={
                        edit
                          ? { width: 200, background: "transparent" }
                          : {
                              width: 200,
                              background: "transparent",
                              border: "none",
                            }
                      }
                    />
                  ) : (
                    <span>
                      <em>not set</em>
                    </span>
                  )
                ) : (
                  <FormInput
                    type="date"
                    name="subscriptionEndDate"
                    onChange={handleChange}
                    defaultValue={control.subscriptionEndDate}
                    style={{ width: 200 }}
                  />
                )}
              </Col>
            </>
          </Col>
          <div className="d-flex flew-row">
            <Button
              className="ml-3"
              onClick={edit ? submitChanges : () => setEdit(true)}
            >
              {edit ? "Submit Changes" : "Edit Patient Profile"}
            </Button>
            {edit && (
              <Button
                theme="danger"
                className="ml-3"
                onClick={() => {
                  restore();
                  setEdit(false);
                }}
              >
                Cancel Changes
              </Button>
            )}
            <Button className="ml-3" onClick={() => setDeletePopup(true)} theme="danger">
              Delete Patient
            </Button>
          </div>
        </Card>
      </Col>
    </Container>
  );
};

export default PatientDetails;
