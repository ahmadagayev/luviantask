import React, { useState } from "react";
import "./Register.css";
import { authRequest, tokenRequest } from "../../js/auth";
import Otp from "../Otp/Otp";

const Register = ({ handleLogin }) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    registercheck: false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    // console.log(name, value, checked);
    if (name === "registercheck") {
      setFormValues({ ...formValues, [name]: checked });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === true) {
    tokenRequest
      .post(`api/register/`, {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
        cpassword: formValues.cpassword,
        registercheck: formValues.registercheck,
      })
      .then((response) => {
        console.log(response.data);
        handleShow();
      })
      .catch((error) => {
        console.log(error);
        //   handleErrorData(error?.response);
      });
  };
  return (
    <main className="pagetemplate">
      <section id="cooperation">
        <div className="container">
          <div className="row" style={{ minHeight: 400 }}>
            <div className="col-mm-12">
              <section id="page">
                <h1 className="page-header nm-t nb-b">Giriş</h1>
                <div
                  className="page-entry"
                  style={{
                    textAlign: "justify",
                    marginLeft: "auto",
                    width: "100%",
                    marginRight: "auto",
                  }}
                >
                  <div className="form-container">
                    <div className="form-container-head ">
                      <div className="form-container-right">
                        <a href="#/">Şifrənizi Unutdunuz?</a>
                      </div>
                      <div className="form-container-clear" />
                    </div>
                    <div className="form-container-body">
                      <form action="">
                        <div className="form-container-field  form-container-field-username">
                          <label
                            className="form-container-label"
                            htmlFor="username"
                          >
                            İstifadəçi adı
                            <span className="required">*</span>
                          </label>
                          <input
                            className="form-container-input"
                            type="text"
                            onChange={handleChange}
                            defaultValue={formValues.username}
                            name="username"
                            id="username"
                          />
                        </div>
                        <div className="form-container-clear" />

                        <div className="form-container-field  form-container-field-email">
                          <label
                            className="form-container-label"
                            htmlFor="email"
                          >
                            Elektron poçt ünvanı
                            <span className="required">*</span>
                          </label>
                          <input
                            className="form-container-input"
                            type="text"
                            onChange={handleChange}
                            defaultValue={formValues.email}
                            name="email"
                            id="email"
                          />
                        </div>
                        <div className="form-container-clear" />
                        <div
                          className="form-container-field  form-container-field-password"
                          data-key="password"
                        >
                          <label
                            className="form-container-label"
                            htmlFor="password"
                          >
                            Şifrə <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-container-input"
                            defaultValue={formValues.password}
                            name="password"
                            onChange={handleChange}
                            id="password"
                            autoComplete="off"
                          />
                          <div className="form-container-clear" />
                        </div>
                        <div className="form-container-clear" />
                        <div
                          className="form-container-field  form-container-field-cpassword"
                          data-key="cpassword"
                        >
                          <label
                            className="form-container-label"
                            htmlFor="cpassword"
                          >
                            Şifrənizi təsdiq edin{" "}
                            <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-container-input"
                            onChange={handleChange}
                            name="cpassword"
                            defaultValue={formValues.cpassword}
                            id="cpassword"
                            autoComplete="off"
                          />
                          <div className="form-container-clear" />
                        </div>
                        <div className="form-bottom">
                          <div className=" register-form-check">
                            <input
                              type="checkbox"
                              name="registercheck"
                              defaultValue={formValues.registercheck}
                              id="registercheck"
                              onChange={handleChange}
                            />
                            <label className="form-container-checkbox hide-field">
                              Qeydiyyatdan keçməklə saytdan istifadə qaydalarını
                              qəbul edirəm
                            </label>
                          </div>
                        </div>

                        <div className="form-container-clear" />
                        <div className="form-buttons">
                          <button
                            type="submit"
                            className="form-button"
                            onClick={handleSubmit}
                          >
                            Qeydiyyat
                          </button>
                          <button
                            type="submit"
                            className="form-button secondary"
                            onClick={handleLogin}
                          >
                            Daxil ol
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Otp
        show={show}
        initialValues={initialValues}
        handleClose={handleClose}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </main>
  );
};

export default Register;
