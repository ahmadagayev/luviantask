import React, { useState } from "react";
import "./Login.css";
import { tokenRequest } from "../../js/auth";
// import reCAPTCHA from "react-google-recaptcha";
const Login = ({ handleRegister }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    tokenRequest
      .post(`api/login/`, {
        email: formValues.email,
        password: formValues.password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
                        <div className="form-container-field  form-container-field-email">
                          <label
                            className="form-container-label"
                            htmlFor="email"
                          >
                            İstifadəçi adı və ya E-ünvan
                            <span className="required">*</span>
                          </label>
                          <input
                            className="form-container-input"
                            type="text"
                            name="email"
                            onChange={handleChange}
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
                            name="password"
                            id="password"
                            onChange={handleChange}
                            autoComplete="off"
                          />
                          <div className="form-container-clear" />
                        </div>
                        {/* <reCAPTCHA />
                        <reCAPTCHA sitekey={"your site key"} /> */}
                        <div className="form-checkbox">
                          <input
                            type="checkbox"
                            name="rememberme"
                            id="rememberme"
                            defaultValue="true"
                          />
                          <label className="form-container-checkbox hide-field">
                            Məni yadda saxla
                          </label>
                        </div>

                        <div className="form-container-clear" />
                        <div className="form-buttons">
                          <button
                            type="submit"
                            className="form-button"
                            onClick={handleSubmit}
                          >
                            Daxil ol
                          </button>
                          <button
                            type="submit"
                            className="form-button secondary"
                            onClick={handleRegister}
                          >
                            Hesab Yarat
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
    </main>
  );
};

export default Login;
