import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { tokenRequest } from "../../js/auth";

const Otp = ({
  handleClose,
  show,
  formValues,
  initialValues,
  setFormValues,
}) => {
  const [otp, setOtp] = useState("");
  const inputStyle = {
    width: "3rem",
    height: "3rem",
    margin: "0 1rem",
    fontSize: "2rem",
    borderRadius: "4px",
    border: "1px solid rgba(0,0,0,.3)",
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    tokenRequest
      .post(`api/verify_otp/`, {
        email: formValues.email,
        otp: otp,
      })
      .then((response) => {
        console.log(response);
        setFormValues(initialValues);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
        //   handleErrorData(error?.response);
      });
    // }
    // setValidated(true);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter verification code</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle={inputStyle}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Otp;
