import React, { useEffect } from "react";
import azFlag from "../../assets/azerbaijan-flag-round-icon-256.webp";
import ruFlag from "../../assets/russia-flag-round-icon-256.webp";
const HeaderTop = () => {
  // useEffect(() => {
  //   const header = document.getElementById("header");
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 0) {
  //       header.style.display = "none";
  //     } else {
  //       header.style.display = "block";
  //     }
  //   });
  //   // return () => {
  //   //   window.removeEventListener("scroll");
  //   // };
  // }, []);
  return (
    <React.Fragment>
      <section id="header" className="v-desktop">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="menu">
                <ul>
                  <li>
                    <a
                      //  href="https://kontakt.az/korporativ-satislar/"
                      href="#/"
                    >
                      Korporativ satışlar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/"
                      // href="https://kontakt.az/magazalar/"
                    >
                      Mağazalar
                    </a>
                  </li>
                  <li>
                    <a
                      // href="https://kontakt.az/servisler/"
                      href="#/"
                    >
                      Servislər
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/"
                      // href="https://kontakt.az/faq/"
                    >
                      Tez-tez verilən suallar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 d-flex">
              <div className="info">
                <ul>
                  <li>
                    <a
                      href="#/"
                      data-toggle="modal"
                      data-target="#monthly-payment-modal"
                    >
                      <span style={{ color: "#099D0D", fontSize: 14 }}>
                        Aylıq Ödəniş
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/"
                      // href="https://kontakt.az/watchlist/"
                    >
                      <div className="icon feaheart">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={24} height={24} fill="white" />
                          <path
                            d="M11.9995 22C11.7381 22 11.4766 21.9532 11.228 21.8604C4.91019 19.4892 1 13.3619 1 9.04564C1 7.00964 1.61226 5.24548 2.76958 3.94416C3.88454 2.69061 5.40368 2 7.04712 2C9.39766 2 10.7363 3.22142 11.5392 4.14069C11.6589 4.27753 11.8228 4.35283 12.0005 4.35283C12.1782 4.35283 12.343 4.27753 12.4626 4.14069C13.2646 3.22233 14.6033 2 16.9538 2C18.5972 2 20.1155 2.69061 21.2304 3.94325C22.3887 5.24456 23 7.00872 23 9.04472C23 10.481 22.57 12.1084 21.7561 13.7513C21.5646 14.1379 21.0951 14.2968 20.7075 14.1049C20.3199 13.9139 20.1615 13.4455 20.353 13.0589C21.0509 11.651 21.4348 10.2248 21.4348 9.04381C21.4348 5.44384 19.18 3.55937 16.9529 3.55937C15.6142 3.55937 14.6235 4.03967 13.6421 5.16466C13.2268 5.64037 12.6284 5.91312 12.0005 5.91312C11.3725 5.91312 10.7741 5.64037 10.3589 5.16466C9.37556 4.04151 8.38581 3.56121 7.04712 3.56121C4.81996 3.56121 2.56518 5.44476 2.56518 9.04564C2.56518 10.8741 3.4647 13.1819 4.97188 15.2179C6.70739 17.5634 9.12513 19.4029 11.7795 20.3993C11.9213 20.4526 12.0787 20.4526 12.2205 20.3993C13.9661 19.7445 15.5709 18.7582 16.9906 17.4688C17.3101 17.1786 17.8054 17.2016 18.0964 17.5202C18.3873 17.8389 18.3643 18.333 18.0448 18.6232C16.4778 20.0457 14.7045 21.1349 12.772 21.8604C12.5225 21.9532 12.261 22 11.9995 22Z"
                            fill="#1D1D1B"
                          />
                        </svg>
                        <span className="compare_count topbar_count">0</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/"
                      // href="https://kontakt.az/compare/"
                    >
                      <div className="icon feascale">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_53_606)">
                            <rect width={24} height={24} fill="white" />
                            <path
                              d="M9.63593 15.4195H0.651704C0.433424 15.4195 0.230348 15.311 0.108719 15.1287C-0.0118234 14.9475 -0.0335427 14.7175 0.0500769 14.5168L4.14852 4.75231C4.24735 4.51794 4.47323 4.36169 4.72734 4.35301C4.98255 4.34325 5.2182 4.48539 5.33223 4.71217L10.2191 14.4766C10.3201 14.6784 10.3092 14.9182 10.1909 15.1103C10.0725 15.3023 9.86181 15.4195 9.63593 15.4195ZM1.63125 14.1175H8.58145L4.80119 6.56436L1.63125 14.1175Z"
                              fill="#1D1E1C"
                            />
                            <path
                              d="M5.14315 19.8819C2.30768 19.8819 0 17.7291 0 15.0827C0 14.7235 0.292126 14.4316 0.651581 14.4316C1.01104 14.4316 1.30316 14.7235 1.30316 15.0827C1.30316 17.0108 3.02551 18.5798 5.14315 18.5798C7.26079 18.5798 8.98314 17.0108 8.98314 15.0827C8.98314 14.7235 9.27526 14.4316 9.63472 14.4316C9.99417 14.4316 10.2863 14.7235 10.2863 15.0827C10.2874 17.7291 7.9797 19.8819 5.14315 19.8819Z"
                              fill="#1D1E1C"
                            />
                            <path
                              d="M18.8568 19.8819C16.0202 19.8819 13.7136 17.7291 13.7136 15.0827C13.7136 14.7235 14.0057 14.4316 14.3652 14.4316C14.7247 14.4316 15.0168 14.7235 15.0168 15.0827C15.0168 17.0108 16.7391 18.5798 18.8568 18.5798C20.9744 18.5798 22.6968 17.0108 22.6968 15.0827C22.6968 14.7235 22.9889 14.4316 23.3483 14.4316C23.7078 14.4316 23.9999 14.7235 23.9999 15.0827C23.9999 17.7291 21.6922 19.8819 18.8568 19.8819Z"
                              fill="#1D1E1C"
                            />
                            <path
                              d="M23.3483 15.4193H14.3641C14.1458 15.4193 13.9427 15.3108 13.8211 15.1285C13.7006 14.9473 13.6789 14.7173 13.7625 14.5166L17.8609 4.75213C17.9597 4.51776 18.1856 4.36151 18.4397 4.35283C18.6939 4.34524 18.9306 4.48521 19.0446 4.71199L23.9304 14.4764C24.0314 14.6782 24.0205 14.918 23.9022 15.1101C23.7838 15.3022 23.5742 15.4193 23.3483 15.4193ZM15.3436 14.1173H22.2938L18.5136 6.56418L15.3436 14.1173Z"
                              fill="#1D1E1C"
                            />
                            <path
                              d="M20.5119 5.65461H2.85837C2.49891 5.65461 2.20679 5.36273 2.20679 5.00357C2.20679 4.64442 2.49891 4.35254 2.85837 4.35254H20.5119C20.8713 4.35254 21.1635 4.64442 21.1635 5.00357C21.1635 5.36273 20.8713 5.65461 20.5119 5.65461Z"
                              fill="#FF003C"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_53_606">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="compare_count topbar_count">0</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel: *6060">
                      <span>*6060</span>
                    </a>
                  </li>
                  <li className=" lang_list_item" data-lang="az">
                    <a
                      href="#/"
                      // href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/"
                    >
                      <img
                        className="lazy"
                        src={azFlag}
                        // data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/azerbaijan-flag-round-icon-256.png?v=8.1175"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className=" lang_list_item" data-lang="ru">
                    <a
                      href="#/"
                      // href="https://kontakt.az/ru/telefony-i-planshety/mobilnie-smartfoni/apple-mobilnie-smartfoni/"
                    >
                      <img
                        className="lazy"
                        src={ruFlag}
                        // data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/russia-flag-round-icon-256.png?v=8.1175"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeaderTop;
