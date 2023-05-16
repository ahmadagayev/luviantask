import React from "react";
import "./HeaderBreadCrumb.css";
const HeaderBreadCrumb = ({ showMain, showLogin, showRegister }) => {
  return (
    <section id="header-breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {showMain && (
              <ul>
                <li>
                  <a href="#/">Əsas səhifə</a>
                </li>
                <li>
                  <a href="#/">telefonlar və planşetlər</a>
                </li>
                <li>
                  <a href="#/">smartfonlar</a>
                </li>
                <li>
                  <a href="#/">apple</a>
                </li>
                <li />
              </ul>
            )}
            {(showLogin || showRegister) && (
              <ul>
                <li>
                  <a href="#/">Əsas səhifə</a>
                </li>
                <li>
                  <a href="#/" title="My Profile">
                    My Profile
                  </a>
                </li>
                <li>
                  <strong title="Giriş"> Giriş</strong>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div id="header-breadcrumb-after" />
    </section>
  );
};

export default HeaderBreadCrumb;
