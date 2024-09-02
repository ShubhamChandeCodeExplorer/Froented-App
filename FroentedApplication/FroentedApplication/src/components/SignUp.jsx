import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";

const SignUp = () => {
  const [employee, setEmployee] = useState({
    empFirstName: "",
    empLastName: "",
    empAddress: "",
    empSalary: "",
    empDOB: "",
    empEmailId: "",
    empPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/employee/v1/signup",
        employee
      );
      console.log(response.data);
      alert("Signup done successfully");
    } catch (error) {
      alert("Please try again");
    }
  };

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            The best offer <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              for your business
            </span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard
            className="my-5 bg-glass"
            style={{ borderRadius: "15px", width: "700px" }}
          >
            <MDBCardBody className="p-5">
              <h1 style={{ textAlign: "center" }}>Sign Up</h1>
              <form onSubmit={handleOnSubmit}>
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First Name"
                      id="form1"
                      type="text"
                      name="empFirstName"
                      value={employee.empFirstName}
                      onChange={handleOnChange}
                      required
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last Name"
                      id="form2"
                      type="text"
                      name="empLastName"
                      value={employee.empLastName}
                      onChange={handleOnChange}
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Address"
                  id="form3"
                  type="text"
                  name="empAddress"
                  value={employee.empAddress}
                  onChange={handleOnChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Salary"
                  id="form4"
                  type="number"
                  name="empSalary"
                  value={employee.empSalary}
                  onChange={handleOnChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="DOB"
                  id="form5"
                  type="date"
                  name="empDOB"
                  value={employee.empDOB}
                  onChange={handleOnChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form6"
                  type="email"
                  name="empEmailId"
                  value={employee.empEmailId}
                  onChange={handleOnChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form7"
                  type="password"
                  name="empPassword"
                  value={employee.empPassword}
                  onChange={handleOnChange}
                  required
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn
                  style={{
                    backgroundColor: "blue",
                    textAlign: "center",
                    marginLeft: "260px",
                  }}
                  size="md"
                  type="submit"
                >
                  Sign Up
                </MDBBtn>
              </form>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;
