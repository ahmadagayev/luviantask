import React from "react";
import "./ProductView.css";
import appleReserved from "../../assets/apple-auth-res.webp";
import playIcon from "../../assets/playicon-150x150.webp";
import kartImg from "../../assets/kart.webp";
import onlineImg from "../../assets/online.webp";
import qapidaImg from "../../assets/qapida.webp";
import taksitImg from "../../assets/taksit_az.webp";
const ProductView = ({ data }) => {
  const handleActiveKreditMenu = () => {
    // console.log(document.querySelector(".calculator-responsive-select .menu p"))
    const menu = document.querySelector(".calculator-responsive-select .menu");
    const dropDown = document.querySelector(".cont-price .drop_down");
    const pTag = document.querySelector(
      ".calculator-responsive-select .menu p"
    );
    menu.classList.toggle("active");
    dropDown.classList.toggle("active");
    pTag.classList.toggle("active");
    if (dropDown.classList.contains("active")) {
      dropDown.style.display = "none";
    } else {
      dropDown.style.display = "block";
    }
  };
  return (
    <section id="product-view">
      {/* <section id="mob-main-menu" className="mob-main-menu mob-main-menu-v2 ">
        <div className="mob-main-menu-body" style={{ width: "75%" }}>
          <div className="category-menu-mather">
            <div className="category-menu-header">
              <div
                className="mobmenugeri"
                style={{ display: "none" }}
                onclick='jQuery("a.sub-menu.active").trigger("click");'
              >
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 240.823 240.823"
                  style={{
                    enableBackground: "new 0 0 240.823 240.823",
                    width: 15,
                    fill: "#17A539",
                  }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      id="Chevron_Right"
                      d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179
                          l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816
                          C52.942,116.507,52.942,124.327,57.633,129.007z"
                    />
                  </g>
                </svg>
                <span>Geri </span>
              </div>
              <div className="divu6060">
                <img
                  className="lazy"
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                  data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/phone-black.png"
                  style={{
                    width: "12.8px",
                    height: 22,
                    objectFit: "contain",
                  }}
                  alt=""
                />
                <span className="kontact-number">*6060</span>
              </div>
              <button className="menu-icon-mobs">
                <img
                  className="lazy"
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                  data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/clear-button-black.png"
                  style={{ width: 20, height: 20, objectFit: "contain" }}
                  alt=""
                />
              </button>
            </div>
            <section
              className="all-category-menu"
              id="all-category-second-menu"
            />
          </div>
        </div>
      </section> */}
      <div className="container">
        <div className="mobilebanner"></div>
        <div id="product-details">
          <div className="product-headline">
            <div className="product-status">
              <p className="success">
                <img
                  className="skip_lazy"
                  src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/check.png"
                  alt=""
                />
                Məhsul mövcuddur
              </p>
              <p>
                <span>TM-DG-SBP-1105-SM-0209</span>
              </p>
            </div>
            <div className="product-feedback ">
              <div className="apple_cert_icon_full_single">
                <img
                  className="lazy"
                  src={appleReserved}
                  data-src="https://kontakt.az/wp-content/uploads/2020/08/apple-auth-res.png"
                />
              </div>
              <button
                type="button"
                onclick="window.location.href='https://kontakt.az/video-meslehetci/?vcpid=152294'"
                className=" select-item-vco"
                data-id={152294}
                data-reserve-id={152294}
                data-mid="TM-DG-SBP-1105-SM-0209"
                data-price="1399.99"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={24} height={24} fill="white" />
                  <path
                    d="M12.4139 18H1.58607C0.711799 18 0 17.1821 0 16.1775V7.82249C0 6.8179 0.711799 6 1.58607 6H12.4139C13.2882 6 14 6.8179 14 7.82249V16.1775C14 17.1821 13.289 18 12.4139 18ZM1.58607 7.51134C1.43907 7.51134 1.31528 7.65358 1.31528 7.82249V16.1775C1.31528 16.3464 1.43907 16.4887 1.58607 16.4887H12.4139C12.5609 16.4887 12.6847 16.3464 12.6847 16.1775V7.82249C12.6847 7.65358 12.5609 7.51134 12.4139 7.51134H1.58607Z"
                    fill="#323232"
                  />
                  <path
                    d="M22.3817 18C22.3067 18 22.2325 17.9858 22.1615 17.9582L15.4507 15.3363C15.1808 15.2305 15 14.9442 15 14.6224V9.66037C15 9.34741 15.1713 9.06735 15.4302 8.95533L22.141 6.05068C22.2175 6.01778 22.2996 6 22.3817 6C23.2737 6 24 6.81796 24 7.82263V16.1783C24 17.182 23.2737 18 22.3817 18ZM16.342 14.0845L22.4607 16.4752C22.5735 16.4361 22.658 16.3152 22.658 16.1774V7.82174C22.658 7.6866 22.5775 7.56924 22.4686 7.52656L16.342 10.1787V14.0845Z"
                    fill="#323232"
                  />
                  <path
                    d="M4.2 11.4C4.86274 11.4 5.4 10.8627 5.4 10.2C5.4 9.53726 4.86274 9 4.2 9C3.53726 9 3 9.53726 3 10.2C3 10.8627 3.53726 11.4 4.2 11.4Z"
                    fill="#FF003C"
                  />
                </svg>
                <span>Canlı Video Məsləhətçi</span>
                <span className="vcomob">Video Məsləhətçi</span>
              </button>
              <button
                type="button"
                className="feedback-action feaheart select-item"
                data-id={152294}
                data-reserve-id={152294}
                data-mid="TM-DG-SBP-1105-SM-0209"
                data-price="1399.99"
              >
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
                </svg>{" "}
                <span className="vcomob">Seçilmişlər</span>
              </button>
              <button
                type="button"
                className="feedback-action feascale compare-button"
                data-id={152294}
                data-reserve-id={152294}
                data-mid="TM-DG-SBP-1105-SM-0209"
                data-price="1399.99"
              >
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
                </svg>{" "}
                <span className="vcomob">Müqayisə</span>
              </button>
            </div>
          </div>
          <div id="product-info">
            <div className="product-img-view">
              <div className="menu-view">
                <div className="side-menu">
                  <div className>
                    <button
                      onclick="kt_videosetter('dWa_jvLnD38')"
                      className="btn-menu btn-video"
                      data-toggle="modal"
                      data-target="#video-lighbox-modal"
                    >
                      <img
                        className="lazy"
                        src={playIcon}
                        data-src="https://kontakt.az/wp-content/uploads/2020/12/playicon-150x150.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div className="mainImg" style={{ position: "relative" }}>
                  <div className="lbl-percentage-grid-2022">
                    <div className="lbl-badge-2022 lbl-badge-2022-catdırılma">
                      <p>pulsuz çatdırılma</p>
                    </div>
                  </div>
                  <div className="imgContainer">
                    <a
                      className="single-product-link"
                      href="https://kontakt.az/wp-content/uploads/2019/11/iphone_11_black_2.png.jpg"
                      data-lightbox="single-product"
                      data-title="iPhone 11 128 GB Black"
                    >
                      <img
                        className="lazy"
                        src={data?.sekil}
                        data-src="https://kontakt.az/wp-content/uploads/2019/11/iphone_11_black_2.png.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <form action className="product-features" style={{ width: "100%" }}>
              <div className="wrapper">
                <div className="feature-container">
                  <h1 className="title">{data?.mehsul_adi}</h1>
                  <div className="feature">
                    <div className="color" style={{ marginRight: "10px" }}>
                      <p>Rəng:</p>
                      <button
                        onclick="window.location.href='https://kontakt.az/?p=152296'"
                        type="button"
                        className="c1 "
                        style={{
                          border: "1px solid #e4dddd",
                          background: ` ${data?.reng}`,
                        }}
                        title="Red"
                      />
                    </div>
                    <div className="memory">
                      <p>Yaddaş:</p>
                      <button
                        onclick="window.location.href='https://kontakt.az/?p=152294'"
                        type="button"
                        className="active"
                        title="128GB"
                      >
                        {data?.daxili_yaddas}
                      </button>
                    </div>
                    <div
                      className="labels labels_popovers"
                      style={{ marginLeft: "-20px" }}
                    >
                      <a
                        href="javascript://"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        className="lbl-box-new"
                        data-html="true"
                        title="<p>Kartla ödəmə imkanı.</p>"
                      >
                        <img
                          className="lazy"
                          src={kartImg}
                          data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/kart.png"
                          alt=""
                        />
                      </a>
                      <a
                        href="javascript://"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        className="lbl-box-new"
                        data-html="true"
                        title="<p>Online ödəmə imkanı.</p>"
                      >
                        <img
                          className="lazy"
                          src={onlineImg}
                          data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/online.png"
                          alt=""
                        />
                      </a>
                      <a
                        href="javascript://"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        className="lbl-box-new"
                        data-html="true"
                        title="<p>Qapıda ödəmə imkanı.</p>"
                      >
                        <img
                          className="lazy"
                          src={qapidaImg}
                          data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/qapida.png"
                          alt=""
                        />
                      </a>
                      <a
                        id="taksitmetn"
                        name="taksitmetn"
                        href="javascript://"
                        data-toggle="popover"
                        data-placement="bottom"
                        data-btshow="Ətraflı..."
                        data-bthide="Daha az göstər..."
                        className="lbl-box-new bstaksit"
                        data-html="true"
                        data-content="<p>§ <b>BirKartla</b> Apple məhsulları və smartfonlar 12 ay, televizor, məişət texnikası və tekstil 18 ay, mebel isə 24 ay FAİZSİZ TAKSİTLƏ.</p><p class='taksitmoretext' >§ <b>TamKartla</b> Apple məhsulları 18 ay, smartfonlar 12 ay, televizor, məişət texnikası və tekstil 18 ay, mebel 18 ay FAİZSİZ TAKSİTLƏ.<br>§ <b>Albalı kartla</b> Apple məhsulları 18 ay, smartfonlar 12 ay, televizor, məişət texnikası və tekstil 18 ay, mebel 18 ay FAİZSİZ TAKSİTLƏ. <br>§ <b>Bolkartla</b>  Apple məhsulları 18 ay, smartfonlar 18 ay, televizor, məişət texnikası və tekstil 18 ay, mebel 18 ay FAİZSİZ TAKSİTLƏ. <br> </p><a href='#taksitmetn' class='taksitshow_hide' >Ətraflı...</a><i class='fa fa-close fa-closep fa-closetaksit'></i>"
                      >
                        <img
                          className="lazy"
                          src={taksitImg}
                          data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/2021/taksit_az.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    className="div3dvideomob"
                    style={{
                      position: "absolute",
                      paddingTop: 25,
                      left: 15,
                      zIndex: 9,
                    }}
                  >
                    <button
                      onclick="kt_videosetter('dWa_jvLnD38')"
                      type="button"
                      style={{
                        border: "none",
                        display: "block",
                        marginBottom: 11,
                        background: "transparent",
                      }}
                      className="btn-menu btn-video"
                      data-toggle="modal"
                      data-target="#video-lighbox-modal"
                    >
                      <img
                        className="lazy"
                        style={{ width: 65 }}
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                        data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/videomobil.png"
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="product-feedback ">
                    <div className="apple_cert_icon_full_single">
                      <img
                        className="lazy"
                        src={appleReserved}
                        data-src="https://kontakt.az/wp-content/uploads/2020/08/apple-auth-res.png"
                      />
                    </div>
                    <button
                      type="button"
                      onclick="window.location.href='https://kontakt.az/video-meslehetci/?vcpid=152294'"
                      className=" select-item-vco"
                      data-id={152294}
                      data-reserve-id={152294}
                      data-mid="TM-DG-SBP-1105-SM-0209"
                      data-price="1399.99"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={24} height={24} fill="white" />
                        <path
                          d="M12.4139 18H1.58607C0.711799 18 0 17.1821 0 16.1775V7.82249C0 6.8179 0.711799 6 1.58607 6H12.4139C13.2882 6 14 6.8179 14 7.82249V16.1775C14 17.1821 13.289 18 12.4139 18ZM1.58607 7.51134C1.43907 7.51134 1.31528 7.65358 1.31528 7.82249V16.1775C1.31528 16.3464 1.43907 16.4887 1.58607 16.4887H12.4139C12.5609 16.4887 12.6847 16.3464 12.6847 16.1775V7.82249C12.6847 7.65358 12.5609 7.51134 12.4139 7.51134H1.58607Z"
                          fill="#323232"
                        />
                        <path
                          d="M22.3817 18C22.3067 18 22.2325 17.9858 22.1615 17.9582L15.4507 15.3363C15.1808 15.2305 15 14.9442 15 14.6224V9.66037C15 9.34741 15.1713 9.06735 15.4302 8.95533L22.141 6.05068C22.2175 6.01778 22.2996 6 22.3817 6C23.2737 6 24 6.81796 24 7.82263V16.1783C24 17.182 23.2737 18 22.3817 18ZM16.342 14.0845L22.4607 16.4752C22.5735 16.4361 22.658 16.3152 22.658 16.1774V7.82174C22.658 7.6866 22.5775 7.56924 22.4686 7.52656L16.342 10.1787V14.0845Z"
                          fill="#323232"
                        />
                        <path
                          d="M4.2 11.4C4.86274 11.4 5.4 10.8627 5.4 10.2C5.4 9.53726 4.86274 9 4.2 9C3.53726 9 3 9.53726 3 10.2C3 10.8627 3.53726 11.4 4.2 11.4Z"
                          fill="#FF003C"
                        />
                      </svg>
                      <span>Canlı Video Məsləhətçi</span>
                      <span className="vcomob">Video Məsləhətçi</span>
                    </button>
                    <button
                      type="button"
                      className="feedback-action feaheart select-item"
                      data-id={152294}
                      data-reserve-id={152294}
                      data-mid="TM-DG-SBP-1105-SM-0209"
                      data-price="1399.99"
                    >
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
                      </svg>{" "}
                      <span className="vcomob">Seçilmişlər</span>
                    </button>
                    <button
                      type="button"
                      className="feedback-action feascale compare-button"
                      data-id={152294}
                      data-reserve-id={152294}
                      data-mid="TM-DG-SBP-1105-SM-0209"
                      data-price="1399.99"
                    >
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
                      </svg>{" "}
                      <span className="vcomob">Müqayisə</span>
                    </button>
                  </div>
                  <div
                    className="mob-carousel"
                    style={{ position: "relative" }}
                  >
                    <div className="lbl-percentage-grid-2022">
                      <div className="lbl-badge-2022 lbl-badge-2022-catdırılma">
                        <p>pulsuz çatdırılma</p>
                      </div>
                    </div>
                    <div className="imgHolder">
                      <a
                        className="single-product-link"
                        href="https://kontakt.az/wp-content/uploads/2019/11/iphone_11_black_2.png.jpg"
                        data-lightbox="single-product"
                        data-title="iPhone 11 128 GB Black"
                      >
                        <img
                          className="lazy"
                          alt="iPhone 11 128 GB Black - 1"
                          data-qazy="true"
                          src={data?.sekil}
                          data-src="https://kontakt.az/wp-content/uploads/2019/11/iphone_11_black_2.png.jpg"
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    className="feature-mobile"
                    style={{ position: "relative", minHeight: 68 }}
                  >
                    <div className="color">
                      <p>Rəng:</p>
                      <button
                        onclick="window.location.href='https://kontakt.az/?p=152296'"
                        type="button"
                        className="c1 "
                        style={{
                          border: "1px solid #e4dddd",
                          background: "red",
                        }}
                        title="Red"
                      />
                      <button
                        onclick="window.location.href='https://kontakt.az/?p=152295'"
                        type="button"
                        className="c1 "
                        style={{
                          border: "1px solid #e4dddd",
                          background: "white",
                        }}
                        title="White"
                      />
                      <button
                        onclick="window.location.href='https://kontakt.az/?p=152294'"
                        type="button"
                        className="c1 1"
                        style={{
                          border: "1px solid #e4dddd",
                          background: "black",
                        }}
                        title="Black"
                      />
                    </div>
                    <div className="memory">
                      <p>Yaddaş:</p>
                      <button
                        onclick="window.location.href='https://kontakt.az/?p=152294'"
                        type="button"
                        className="active"
                        title="128GB"
                      >
                        128GB
                      </button>
                    </div>
                  </div>
                  <div className="cont-price">
                    <div className="calculator-responsive-select-mother">
                      <div className="price">
                        <small className="qiymeti  qiymeti_endirim">
                          qiymət
                        </small>
                        <p className="gridprice gridprice_cash endirimvar">
                          <span
                            style={{
                              textDecoration: "line-through",
                              fontWeight: "normal",
                            }}
                          >
                            1559.99 <small className="azn_span">M</small>
                          </span>
                          <br />
                          <span className="nprice" id="price-152294">
                            1399.99 <small className="azn_span">M</small>
                          </span>
                        </p>
                        <div className="lbl-price-discount"></div>
                      </div>
                      <div
                        className="calculator-responsive-select"
                        onClick={handleActiveKreditMenu}
                      >
                        <div className="menu">
                          <p>Kredit Kalkulyatoru</p>
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="451.847px"
                            height="451.847px"
                            viewBox="0 0 451.847 451.847"
                            style={{
                              enableBackground: "new 0 0 451.847 451.847",
                            }}
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
          		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
          		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                              />
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="drop_down">
                      <div className="drop_down_inner">
                        <div className="child_drop_down_inner">
                          <label className="asdsadsa container-radio-btns">
                            <input
                              type="radio"
                              defaultChecked="checked"
                              name="month"
                              defaultValue={6}
                              oninput="toggleSteps(this);"
                            />
                            <span
                              className="checkmark"
                              data-amount="283.4"
                              data-prepay={0}
                            >
                              6 ay
                            </span>
                          </label>
                          <label className="asdsadsa container-radio-btns">
                            <input
                              type="radio"
                              name="month"
                              defaultValue={9}
                              oninput="toggleSteps(this);"
                            />
                            <span
                              className="checkmark"
                              data-amount="196.8"
                              data-prepay={0}
                            >
                              9 ay
                            </span>
                          </label>
                          <label className="asdsadsa container-radio-btns">
                            <input
                              type="radio"
                              name="month"
                              defaultValue={12}
                              oninput="toggleSteps(this);"
                            />
                            <span
                              className="checkmark"
                              data-amount="153.5"
                              data-prepay={0}
                            >
                              12 ay
                            </span>
                          </label>
                          <label className="asdsadsa container-radio-btns">
                            <input
                              type="radio"
                              name="month"
                              defaultValue={15}
                              oninput="toggleSteps(this);"
                            />
                            <span
                              className="checkmark"
                              data-amount="127.4"
                              data-prepay={0}
                            >
                              15 ay
                            </span>
                          </label>
                          <label className="asdsadsa container-radio-btns">
                            <input
                              type="radio"
                              name="month"
                              defaultValue={18}
                              oninput="toggleSteps(this);"
                            />
                            <span
                              className="checkmark"
                              data-amount="110.1"
                              data-prepay={0}
                            >
                              18 ay
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="payment-info">
                        <ul>
                          <li
                            style={{
                              height: 42,
                              background: "#FF003C",
                              paddingTop: 10,
                              display: "none",
                            }}
                          >
                            <p
                              className="faizsizmi faizsizmimob"
                              style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 18,
                              }}
                            >
                              {" "}
                            </p>
                          </li>
                          <li>
                            <p> İlkin ödəniş </p>
                            <p>
                              <span className="ilkin">0</span>{" "}
                              <small className="azn_span">M</small>
                            </p>
                          </li>
                          <li>
                            <p> Aylıq ödəniş </p>
                            <p>
                              <span className="ayliq" />{" "}
                              <small className="azn_span">M</small>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="credit-calculation">
                <div className="title" style={{ paddingBottom: 12 }}>
                  <p>Kredit Kalkulyatoru</p>
                  <p className="birkartdesk" style={{ display: "none" }}>
                    <img
                      className="lazy"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                      data-src="https://kontakt.az/wp-content/uploads/2022/09/birbank.png"
                    />
                    <span className="birkartdesktext">
                      18 ay 77.78 <small className="azn_span">M</small>
                      <small>-dan</small>{" "}
                    </span>
                  </p>
                </div>
                <div className="payment-option">
                  <div className="range-section">
                    <div id="range-tooltip" />
                    <div className="range-container">
                      <span className="bar">
                        <span className="fill" />
                      </span>
                      <input
                        type="range"
                        className="range-slider"
                        style={{ display: "inherit" }}
                        min={6}
                        max={18}
                        valuehtml="6 ay"
                        oninput="toggleSteps(this);"
                        step={1}
                        defaultValue={6}
                        id="cc-range"
                        data-popup-enabled="true"
                      />
                    </div>
                    <ul>
                      <li style={{ width: 10 }}>
                        <p
                          data-perwidth={0}
                          data-amount="283.4"
                          data-prepay={0}
                          data-noper
                          data-count={1}
                          className="nisye_ay"
                          data-month={6}
                        >
                          6
                        </p>
                      </li>{" "}
                      <li style={{ width: 92 }}>
                        <p
                          data-perwidth={25}
                          data-amount="196.8"
                          data-prepay={0}
                          data-noper
                          data-count={1}
                          className="nisye_ay"
                          data-month={9}
                        >
                          9
                        </p>
                      </li>{" "}
                      <li style={{ width: 92 }}>
                        <p
                          data-perwidth={50}
                          data-amount="153.5"
                          data-prepay={0}
                          data-noper
                          data-count={1}
                          className="nisye_ay"
                          data-month={12}
                        >
                          12
                        </p>
                      </li>{" "}
                      <li style={{ width: 92 }}>
                        <p
                          data-perwidth={75}
                          data-amount="127.4"
                          data-prepay={0}
                          data-noper
                          data-count={1}
                          className="nisye_ay"
                          data-month={15}
                        >
                          15
                        </p>
                      </li>{" "}
                      <li style={{ width: 92 }}>
                        <p
                          data-perwidth={100}
                          data-amount="110.1"
                          data-prepay={0}
                          data-noper
                          data-count={1}
                          className="nisye_ay"
                          data-month={18}
                        >
                          18
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="payment-info">
                    <ul>
                      <li
                        style={{
                          width: 48,
                          height: 42,
                          background: "#FF003C",
                          paddingTop: 10,
                          display: "none",
                        }}
                      >
                        <p
                          className="faizsizmi"
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 18,
                          }}
                        >
                          {" "}
                        </p>
                      </li>
                      <li>
                        <p> İlkin ödəniş </p>
                        <p>
                          <span className="ilkin">0</span>{" "}
                          <small className="azn_span"> M</small>
                        </p>
                      </li>
                      <li>
                        <p> Aylıq ödəniş </p>
                        <p>
                          <span className="ayliq">110.1</span>{" "}
                          <small className="azn_span"> M</small>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mop">
                <button
                  style={{ color: "red" }}
                  type="button"
                  className="on-click btn-mop kontakt-button-birklik"
                  data-toggle="modal"
                  data-target="#kontakt-modal-birklik"
                >
                  {" "}
                  Bir kliklə al{" "}
                </button>
                <button
                  type="button"
                  className="cash btn-mop "
                  onclick="kontakt_push_cart_modal(152294,1)"
                >
                  {" "}
                  Nağd al{" "}
                </button>
                <button
                  type="button"
                  className="partial btn-mop"
                  data-toggle="modal"
                  data-target="#partial-pay-modal"
                >
                  {" "}
                  Hissə - hissə al{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          id="kontakt-modal-birklik"
          className="modal fade"
          role="dialog"
          style={{ zIndex: 99999991 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <img
                    className="k7closebut lazy"
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                    data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/x_button2.png"
                  />
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor style={{ fontSize: 18 }}>
                    Mobil telefon nömrənizi daxil edin
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    style={{ width: "100%" }}
                    className="ocinput form-control form-control-lg phone-no-mask-dis"
                    name="mobile_number"
                    inputMode="text"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    name="pid"
                    defaultValue={152294}
                    data-guid="TM-DG-SBP-1105-SM-0209"
                    data-guid-mk="TM-DG-SBP-1105-SM-0209"
                  />
                </div>
                <div className="form-group" style={{ paddingTop: 20 }}>
                  <label htmlFor style={{ fontSize: 18 }}>
                    Sifariş formasını seçin
                  </label>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <div className="form-check form-check-inline ocinput">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="oc_payment_type"
                        id="inlineRadio1"
                        defaultValue={0}
                        onclick="jQuery('.nisye_onc').hide();jQuery('#oc_fin').removeAttr('required');"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Nağd al{" "}
                        <span className="oc_error" style={{ display: "none" }}>
                          *
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-check form-check-inline ocinput">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="oc_payment_type"
                        id="inlineRadio2"
                        defaultValue={1}
                        onclick="jQuery('.nisye_onc').show();jQuery('#oc_fin').attr('required','required');"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Hissə-hissə ödənişlə al{" "}
                        <span className="oc_error" style={{ display: "none" }}>
                          *
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html: ".nisye_onc .form-group{margin-bottom:0px}",
                  }}
                />
                <div
                  className="row nisye_onc form-group"
                  style={{ display: "none" }}
                >
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="oc_fin" style={{ fontSize: 18 }}>
                        Fin kodu qeyd edin <span className="oc_error">*</span>
                        <a
                          className="finpopover"
                          href="javascript://"
                          data-placement="top"
                          data-toggle="popover"
                          data-html="true"
                          data-content="FİN kodu, şəxsiyyət vəsiqəsinin sağ aşağı küncündə yerləşir və sonuncu simvolu buraxmaqla, ondan öncəki 7 simvolu təşkil edir.<img class='svfinimg no-lazy' src='https://kontakt.az/wp-content/uploads/2020/12/Azerb_ID-cards-872x1024.jpg' style='max-width:55%;width:200px'>"
                        >
                          <span style={{ color: "black", fontSize: 10 }}>
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width={12}
                              height={14}
                              viewBox="0 0 12 14"
                            >
                              <path
                                style={{ fill: "#858585" }}
                                d="M8 10.75v-1.25q0-0.109-0.070-0.18t-0.18-0.070h-0.75v-4q0-0.109-0.070-0.18t-0.18-0.070h-2.5q-0.109 0-0.18 0.070t-0.070 0.18v1.25q0 0.109 0.070 0.18t0.18 0.070h0.75v2.5h-0.75q-0.109 0-0.18 0.070t-0.070 0.18v1.25q0 0.109 0.070 0.18t0.18 0.070h3.5q0.109 0 0.18-0.070t0.070-0.18zM7 3.75v-1.25q0-0.109-0.070-0.18t-0.18-0.070h-1.5q-0.109 0-0.18 0.070t-0.070 0.18v1.25q0 0.109 0.070 0.18t0.18 0.070h1.5q0.109 0 0.18-0.070t0.070-0.18zM12 7q0 1.633-0.805 3.012t-2.184 2.184-3.012 0.805-3.012-0.805-2.184-2.184-0.805-3.012 0.805-3.012 2.184-2.184 3.012-0.805 3.012 0.805 2.184 2.184 0.805 3.012z"
                              />
                            </svg>
                            FİN Kodu nədir?
                          </span>
                        </a>
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        style={{ width: "100%" }}
                        className="ocinput form-control"
                        id="oc_fin"
                        name="oc_fin"
                        inputMode="text"
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="oc_localphone" style={{ fontSize: 18 }}>
                        Şəhər nömrənizi qeyd edin
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        type="phone"
                        style={{ width: "100%" }}
                        className="ocinput form-control"
                        name="oc_localphone"
                        inputMode="text"
                        defaultValue
                      />
                    </div>
                  </div>
                </div>
                <input type="hidden" defaultValue name="promokod_birklik" />
                <div className="form-group" style={{ paddingTop: 10 }}>
                  <p style={{ textAlign: "center" }}>
                    <button
                      type="button"
                      onclick="kontakt_birkliker('#kontakt-modal-birklik');jQuery(this).prop('disabled','disabled');"
                      className="birkliker_sub btn btn-info ocinput"
                    >
                      Sifarişi göndər
                    </button>
                  </p>
                </div>
                <div
                  className="oc_error oc_error_all"
                  style={{ display: "none" }}
                >
                  Sifarişi göndərmək üçün sifariş formasını seçin
                </div>
                <div
                  className="oc_error_2 oc_error_all"
                  style={{ display: "none" }}
                >
                  Fin kodu qeyd edin
                </div>
                <p></p>
              </div>
              <div className="modal-footer">
                <div
                  className="birkliker_res alert alert-info"
                  style={{ display: "none" }}
                >
                  <p className="birkliklegvet temporary_hidden">
                    Sifariş göndərilir... <small>Dayandır</small>
                  </p>
                </div>
                <div
                  className="birkliker_stopped alert alert-info"
                  style={{ display: "none" }}
                >
                  Əməliyyat dayandırıldı{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="partial-pay-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Hissə-hissə ödəniş</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <img
                    className="k7closebut lazy"
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                    data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/x_button2.png"
                  />
                </button>
              </div>
              <div className="modal-body">
                <section>
                  <section
                    id="selected-cart-item-152294"
                    data-product-guid="TM-DG-SBP-1105-SM-0209"
                    className="selected-cart-item cart_object"
                  >
                    <div className="chosen-cart">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="form-check-input cart_select_item"
                          id="select-152294"
                          data-id={152294}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="select-152294"
                        />
                      </div>
                      <div className="photo-box">
                        <div className="imgHolder">
                          <img
                            className="lazy"
                            alt="iPhone 11 128 GB Black"
                            data-qazy="true"
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                            data-src="https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-0209_afabcf0b3a54bf947569ab162b09ec71_w.jpg"
                          />
                        </div>
                      </div>
                      <div className="details">
                        <div className="row">
                          <div className="col-md-6 col-9">
                            <div className="features">
                              <p>
                                <a
                                  href="https://kontakt.az/iphone-11-128gb-black/"
                                  data-id={152294}
                                  data-reserve-id={152294}
                                  data-mid="TM-DG-SBP-1105-SM-0209"
                                  data-price="1399.99"
                                  data-quantity={1}
                                >
                                  iPhone 11 128 GB Black{" "}
                                </a>
                              </p>
                              <p />
                              <div className="labels"></div>
                            </div>
                          </div>
                          <div className="col-md-6 col-3">
                            <div className="second-half">
                              <div className="quantity">
                                <p>Miqdar</p>
                                <button
                                  type="button"
                                  className="nisye_decrease"
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  id="amount_152294"
                                  defaultValue={1}
                                  min={0}
                                  readOnly="readonly"
                                  max={3}
                                  className="amount nisye_amount nisye_amount_152294"
                                  data-id={152294}
                                />
                                <button
                                  type="button"
                                  className="nisye_increase"
                                >
                                  +
                                </button>
                              </div>
                              <div className="price">
                                <b>
                                  1559.99 <small className="azn_span">M</small>
                                </b>{" "}
                              </div>
                              <div className="cart-summary">
                                <button
                                  type="button"
                                  className="remove cart_remove"
                                  data-id={152294}
                                >
                                  <img
                                    className="lazy"
                                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                                    data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/bin.png"
                                    alt=""
                                  />
                                </button>
                                <p>
                                  <span id="price-152294">1559.99</span>
                                  <span className="azn_span">‎M</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="detail-mob">
                          <div className="quantity">
                            <p>Miqdar</p>
                            <button type="button" className="nisye_decrease">
                              -
                            </button>
                            <input
                              type="number"
                              id="nisye_amount_152294"
                              defaultValue={1}
                              min={0}
                              max={3}
                              readOnly="readonly"
                              className="amount nisye_amount nisye_amount_152294"
                              data-id={152294}
                            />
                            <button type="button" className="nisye_increase">
                              +
                            </button>
                          </div>
                          <div className="price">
                            <p>
                              {" "}
                              1559.99<span className="azn_span">‎M</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="total-price">
                      <p style={{ display: "none" }}>
                        Cəmi:{" "}
                        <span
                          className="itemtotals itemtotal-152294"
                          data-id={152294}
                        >
                          1559.99{" "}
                        </span>
                        <span className="azn_span">‎M</span>
                      </p>
                      <p style={{ display: "none" }} className="catdirilma_p">
                        Çatdırılma:
                        <span className="catdirilma_span" /> <span>‎₼</span>
                      </p>
                    </div>
                  </section>{" "}
                </section>
                <div className="selected-period">
                  <ul className="selected-month">
                    <li
                      className="nisye_ay_modal  active "
                      data-period="6ay"
                      value={6}
                      data-month={6}
                      data-amount="283.4"
                      data-prepay={0}
                    >
                      6ay
                    </li>
                    <li
                      className="nisye_ay_modal "
                      data-period="9ay"
                      value={9}
                      data-month={9}
                      data-amount="196.8"
                      data-prepay={0}
                    >
                      9ay
                    </li>
                    <li
                      className="nisye_ay_modal "
                      data-period="12ay"
                      value={12}
                      data-month={12}
                      data-amount="153.5"
                      data-prepay={0}
                    >
                      12ay
                    </li>
                    <li
                      className="nisye_ay_modal "
                      data-period="15ay"
                      value={15}
                      data-month={15}
                      data-amount="127.4"
                      data-prepay={0}
                    >
                      15ay
                    </li>
                    <li
                      className="nisye_ay_modal "
                      data-period="18ay"
                      value={18}
                      data-month={18}
                      data-amount="110.1"
                      data-prepay={0}
                    >
                      18ay
                    </li>{" "}
                  </ul>
                  <ul className="payment-info">
                    <li>
                      <p>Müddət:</p>
                      <h4>
                        <span className="aysay" /> ay{" "}
                        <span className="faizsizmi"></span>
                      </h4>
                    </li>
                    <li>
                      <p>İlkin ödəniş:</p>
                      <h4>
                        <span className="ilkin" />{" "}
                        <small className="azn_span">M</small>
                      </h4>
                    </li>
                    <li>
                      <p>Aylıq ödəniş:</p>
                      <h4>
                        <span className="ayliq" />{" "}
                        <small className="azn_span">M</small>
                      </h4>
                    </li>
                  </ul>
                </div>
                <div className="title">
                  <h5>Bu məhsulla birlikdə alırlar</h5>
                </div>
                <div className="birlikdealirlar owl-carousel owl-theme">
                  <div className="cart-item">
                    <div className="cart-body-top">
                      <div className="imgHolder">
                        <a href="https://kontakt.az/apple-airpods-2-mv7n2/">
                          <img
                            className="lazy"
                            data-qazy="true"
                            alt="Qulaqlıq Apple Airpods 2 MV7N2RU/A"
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                            data-src="https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-ACS-1109-TW-0001_bb03d69313a918a28fb0d58d244c19db_w.png"
                          />
                        </a>
                      </div>
                      <div className="name">
                        <a href="https://kontakt.az/apple-airpods-2-mv7n2/">
                          Qulaqlıq Apple Airpods 2 MV7N2RU/A{" "}
                        </a>
                        <div className="pricehtml">
                          <p className="gridprice gridprice_cash">
                            <span className="nprice" id="price-109162">
                              319.99
                            </span>{" "}
                            <small className="azn_span">M</small>
                          </p>{" "}
                        </div>
                        <button
                          className="btn btn-hisse-crossell"
                          style={{ background: "#e3e3e3" }}
                          data-id={109162}
                          data-reserve-id={109162}
                          data-mid="TM-DG-ACS-1109-TW-0001"
                          data-price="319.99"
                        >
                          Əlavə et
                        </button>
                      </div>
                    </div>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".cs_added{background:#ff003c !important;color:white !important}",
                    }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <a
                  className="gotocheckout btn-add-to-cart"
                  href="#"
                  data-href="https://kontakt.az/checkout/?hisse_hisse=1&pid=152294"
                >
                  Sifarişi rəsmiləşdir{" "}
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="792.033px"
                    height="792.033px"
                    viewBox="0 0 792.033 792.033"
                    style={{
                      enableBackground: "new 0 0 792.033 792.033",
                    }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g id="_x38_">
                        <g>
                          <path
                            d="M617.858,370.896L221.513,9.705c-13.006-12.94-34.099-12.94-47.105,0c-13.006,12.939-13.006,33.934,0,46.874
          				l372.447,339.438L174.441,735.454c-13.006,12.94-13.006,33.935,0,46.874s34.099,12.939,47.104,0l396.346-361.191
          				c6.932-6.898,9.904-16.043,9.441-25.087C627.763,386.972,624.792,377.828,617.858,370.896z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="product_notes">
                <p>
                  *İlkin ödəniş məbləği ümumi dövriyyə və ödəniş tarixçəsindən
                  asılı olaraq dəyişə bilər.
                </p>
                <p>**</p>
                <p style={{ display: "none" }}>
                  **Məhsul nisyə satılan zaman sistemdə yuvarlaqlaşdırma tətbiq
                  olunduğuna görə ümumi qiymətdə fərq yarana bilər.
                </p>
                <p>
                  **Bu məhsulu endirimli qiymətlə (endirim olduqda) BirKart
                  vasitəsilə ala bilərsniz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="video-lighbox-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="video-lighbox-modal"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: 840, width: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                background: "transparent",
                border: "none !important",
              }}
            >
              <div className="modal-body">
                <div className="embed-container">
                  <iframe
                    allow="fullscreen;"
                    id="video-lighbox-modal-iframe"
                    src="https://www.youtube.com/embed/dWa_jvLnD38"
                    frameBorder={0}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="review-tabs">
          <div className="tabs">
            <ul
              className="nav nav-tabs round-edge-tab"
              id="myTab"
              role="tablist"
            >
              <li
                className="nav-item nav-item-first nav-item-zero"
                style={{ marginRight: 0 }}
              >
                <a
                  className="nav-link active"
                  id="first-tab"
                  data-toggle="tab"
                  href="#first"
                  role="tab"
                  aria-controls="first"
                  aria-selected="true"
                  style={{
                    borderLeftColor: "#ebebeb",
                    borderRightColor: "#ebebeb",
                  }}
                >
                  {" "}
                  Xüsusiyyətlər
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade "
                id="zero"
                role="tabpanel"
                aria-labelledby="zero-tab"
              >
                <p>
                  <span style={{ fontWeight: 400 }}>
                    iPhone 11 Black sadəliyi üstün tutanların seçiminir. Premium
                    görünüşü və ağlasığmaz məhsuldarlığı ilə bu model
                    istifadəçilərinin məmnuniyyətini qısa müddət ərzində
                    qazanıb.
                  </span>
                </p>
                <h2>
                  <b>Dizayn və Displey</b>
                </h2>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Smartfonun qara korpusu parlaq və zərbələrə davamlı şüşə ilə
                    örtülüb. Yan çərçivə mat alüminiumdan hazırlanıb. Korpus
                    suya və toza qarşı IP68 qorunma dərəcəsinə sahibdir. Cihazı
                    təsadüfən suya salsanız belə daxili detallar zədələnməyəcək.
                    Telefonun ön hissəsində böyük LCD ekran yerləşdirilib.
                    Parlaq rənglər və mükəmməl kontrast sayəsində yüksək baxış
                    keyfiyyəti əldə edilir. Sevdiyiniz verilişi və ya serialın
                    yeni bölümünü smartfona yükləyib asanlıqla yolda izləyə
                    biləcəksiniz. Displeyin üst hissəsində FaceID skaneri
                    mövcuddur. Onun köməkliyi ilə cihazı etibarlı şəkildə
                    blokdan çıxaracaqsınız.
                  </span>
                </p>
                <h2>
                  <b>Prosessor və Batareya</b>
                </h2>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Apple smartfona A13 Bionic çipini yerləşdirib. Onun
                    köməkliyi ilə iPhone qrafikanı daha sürətli emal edə,
                    tapşırıqlarınızı saniyələr ərzində yerinə yetirə bilir.
                    Cihazda mail-lərinizi oxuyub sürətli cavablandıra, iş
                    fayllarını redaktə edib göndərə bilərsiniz. Ağır qrafikaya
                    sahib oyunları oynamağı sevirsinizsə iPhone modelinin qrafik
                    prosessoru sizi təəccübləndirəcək. Avtomobil yarışları və ya
                    döyüş zamanı görüntünün detallığından və parlaqlığından həzz
                    alacaqsınız. Məlumatlarınızın saxlanılması üçün 128 GB
                    daxili yaddaş təqdim edilib. Bu da yüzlərlə mahnıların,
                    şəkillərin, vacib falyyarın saxlanılması üçün kifayət edir.
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Adapteri rahat evdə yaddan çıxara bilərsiniz. 3110 mAh qədər
                    artırılmış batareya aktiv istifadədən sonra belə ilə
                    smartfona yüklədiyiniz filmi sona qədər izləməyə imkan
                    yaradır. iPhone 11 modelinin enerjisi ehtiyaclarınıza
                    kifayət edəcək.
                  </span>
                </p>
                <h2>
                  <b>Kameralar Bloku</b>
                </h2>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Hər kəsi heyran edən şəkillər yaratmaq üçün peşəkar
                    fotoapparat əldə etmək məcbur deyil. iPhone 11 kameraları
                    ilə yüksək keyfiyyətli şəkillər və 4K video çəkmək olar.
                    Bənzərsiz selfiləriniz üçün ön paneldə 12 meqapikselli
                    kamera mövcuddur. Daha mükəmməl nəticə üçün axra paneldə
                    yerləşən kamera blokundan istifadə edin. Geniş və ultra
                    geniş kameraların köməkliyi ilə bir toxunuşla fotoəsərlər
                    yaradacaqsınız.
                  </span>
                </p>
              </div>
              <div
                className="tab-pane fade  show active"
                id="first"
                role="tabpanel"
                aria-labelledby="first-tab"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 pr-0">
                    <ul className="features-review-tabs submenuItems_params">
                      <li className="gray-line">Ekran</li>
                      <li>Daxili yaddaş</li>
                      <li className="gray-line">Operativ yaddaş</li>
                      <li>Əsas kamera</li>
                      <li className="gray-line">Ön kamera</li>
                      <li>Nüvə sayı</li>
                      <li className="gray-line">SIM kartların sayı</li>
                      <li>SIM kartın növü</li>
                      <li className="gray-line">Prosessorun adı</li>
                      <li>Prosessor tezliyi</li>
                      <li className="gray-line">Əməliyyat sistemi</li>
                      <li>Əməliyyat sistemin versiyası</li>
                      <li className="gray-line">3G</li>
                      <li>4G</li>
                      <li className="gray-line">NFC</li>
                      <li>Prosessorun növü</li>
                      <li className="gray-line">Şəbəkə</li>
                      <li>Displey növü</li>
                      <li className="gray-line">Simsiz enerji</li>
                      <li>İnfraqırmızı port</li>
                      <li className="gray-line">Göz tanıma funksiyası</li>
                      <li>Suyadavamlılıq</li>
                      <li className="gray-line">Tozkeçirməzlik</li>
                      <li>Zərbəyədavamlılıq</li>
                      <li className="gray-line">Üz tanıma</li>
                      <li>Sürətli enerji yığma</li>
                      <li className="gray-line">Ön fləş</li>
                      <li>Qorunma dərəcəsi</li>
                      <li className="gray-line">Ölçülər</li>
                      <li>Ekran rənglərinin sayı</li>
                      <li className="gray-line">Yaddaş kartı dəstəyi</li>
                      <li>Barometr</li>
                      <li className="gray-line">Giroskop</li>
                      <li>İşıq sensoru</li>
                      <li className="gray-line">Yaxınlaşdırma sensoru</li>
                      <li>Optik sabitləşmə</li>
                      <li className="gray-line">Video formatı</li>
                      <li>Bluetooth versiyası</li>
                      <li className="gray-line">Zoom (video)</li>
                      <li>Zoom (şəkil)</li>
                      <li className="gray-line">Avtofokus əsas kamera</li>
                      <li>Avtofokus ön kamera</li>
                      <li className="gray-line">
                        Video icazəsi və kadr tezliyi
                      </li>
                      <li>Video asta çəkiliş</li>
                      <li className="gray-line">Rəng</li>
                      <li>Enerji toplama növü</li>
                      <li className="gray-line">LED bildiriş göstəricisi</li>
                      <li>Qulaqlıq interfeysi</li>
                      <li className="gray-line">Çıxarıla bilən batareya</li>
                      <li>Akselerometr</li>
                      <li className="gray-line">Enerji yığma gücü</li>
                      <li>Batareyanın həcmi</li>
                      <li className="gray-line">İstehsal ili</li>
                      <li>Barmaq izi oxuyucusu</li>
                      <li className="gray-line">Korpusun materialı</li>
                      <li>Görüntü imkanı</li>
                      <li className="gray-line">Çəki</li>
                      <li>Seriya</li>
                      <li className="gray-line">İstehsalçı</li>{" "}
                    </ul>
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-12 pl-0">
                    <ul className="features-review-tabs submenuItems_params">
                      <li className="gray-line">6.1"</li>
                      <li>128 GB</li>
                      <li className="gray-line">4 GB</li>
                      <li>12 MP + 12 MP</li>
                      <li className="gray-line">12 MP</li>
                      <li>6</li>
                      <li className="gray-line">1</li>
                      <li>Nano SIM</li>
                      <li className="gray-line">Apple</li>
                      <li>2.65 GHz</li>
                      <li className="gray-line">iOS</li>
                      <li>iOS 13</li>
                      <li className="gray-line">Var</li>
                      <li>Var</li>
                      <li className="gray-line">Var</li>
                      <li>Apple A13 Bionic (7 nm+)</li>
                      <li className="gray-line">4G</li>
                      <li>IPS LCD</li>
                      <li className="gray-line">Var</li>
                      <li>Yox</li>
                      <li className="gray-line">Yox</li>
                      <li>Var</li>
                      <li className="gray-line">Var</li>
                      <li>Yox</li>
                      <li className="gray-line">Var</li>
                      <li>Var</li>
                      <li className="gray-line">Yox</li>
                      <li>IP68</li>
                      <li className="gray-line">150.9 × 75.7 × 8.3 mm</li>
                      <li>16 mln</li>
                      <li className="gray-line">Yox</li>
                      <li>Var</li>
                      <li className="gray-line">Var</li>
                      <li>Var</li>
                      <li className="gray-line">Var</li>
                      <li>Var</li>
                      <li className="gray-line">4K / 1080p</li>
                      <li>5.0</li>
                      <li className="gray-line">3x-ə qədər</li>
                      <li>5x-ə qədər</li>
                      <li className="gray-line">Var</li>
                      <li>Yox</li>
                      <li className="gray-line">4K - 1080p, 24-240 kadr/s</li>
                      <li>Var</li>
                      <li className="gray-line">Black</li>
                      <li>Lightning</li>
                      <li className="gray-line">Yox</li>
                      <li>Lightning</li>
                      <li className="gray-line">Yox</li>
                      <li>Var</li>
                      <li className="gray-line">18 Vt</li>
                      <li>3110 mAh</li>
                      <li className="gray-line">2019</li>
                      <li>Yox</li>
                      <li className="gray-line">Metal və şüşə</li>
                      <li>828 × 1792</li>
                      <li className="gray-line">194 q</li>
                      <li>iPhone 11</li>
                      <li className="gray-line">Apple</li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="second"
                role="tabpanel"
                aria-labelledby="second-tab"
              >
                <section id="user-feedback">
                  <div className="existing-feedbacks">
                    <ul>
                      <li>
                        <div className="user-comment">
                          <div className="user">
                            <h6>Rovshan.</h6>
                            <p>2021-06-05</p>
                          </div>
                          <div className="feedback">
                            <div className="rate">
                              <div className="star active">
                                <svg
                                  enableBackground="new 0 0 49.94 49.94"
                                  version="1.1"
                                  viewBox="0 0 49.94 49.94"
                                  xmlSpace="preserve"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                                </svg>
                              </div>
                              <div className="star active">
                                <svg
                                  enableBackground="new 0 0 49.94 49.94"
                                  version="1.1"
                                  viewBox="0 0 49.94 49.94"
                                  xmlSpace="preserve"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                                </svg>
                              </div>
                              <div className="star active">
                                <svg
                                  enableBackground="new 0 0 49.94 49.94"
                                  version="1.1"
                                  viewBox="0 0 49.94 49.94"
                                  xmlSpace="preserve"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                                </svg>
                              </div>
                              <div className="star active">
                                <svg
                                  enableBackground="new 0 0 49.94 49.94"
                                  version="1.1"
                                  viewBox="0 0 49.94 49.94"
                                  xmlSpace="preserve"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                                </svg>
                              </div>
                              <div className="star active">
                                <svg
                                  enableBackground="new 0 0 49.94 49.94"
                                  version="1.1"
                                  viewBox="0 0 49.94 49.94"
                                  xmlSpace="preserve"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                                </svg>
                              </div>
                            </div>
                            <p>Cox gozel telefondur </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="feedback-form">
                    <h4>Rəy yaz</h4>
                    <form
                      id="kontakt_review"
                      action="https://kontakt.az/iphone-11-128gb-black/?reviews=1&newreview#reviewreceived"
                      method="post"
                    >
                      <div className="form-row row justify-space-between">
                        <div className="col-lg-6 col-md-6  col-sm-12">
                          <div className="form-group">
                            <label htmlFor>
                              Adınız <span>*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="review_ad"
                              className="form-control"
                              id="review_ad"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label htmlFor>
                              E-poçt <span>*</span>
                            </label>
                            <input
                              required
                              name="review_email"
                              type="email"
                              className="form-control"
                              id="review_email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor>
                          Rəyiniz <span>*</span>
                        </label>
                        <textarea
                          name="review_metn"
                          required
                          className="form-control"
                          id="review_metn"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                      <div
                        className="g-recaptcha"
                        data-sitekey="6Ld9ArMZAAAAACyX12yR41il5GvtLFgqyiOZRvqT"
                        style={{ textAlign: "right" }}
                      />
                      <div className="rate-submit">
                        <div className="rate">
                          <button className="star" id="s1" score={1}>
                            <svg
                              enableBackground="new 0 0 49.94 49.94"
                              version="1.1"
                              viewBox="0 0 49.94 49.94"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                            </svg>
                          </button>
                          <button className="star" id="s2" score={2}>
                            <svg
                              enableBackground="new 0 0 49.94 49.94"
                              version="1.1"
                              viewBox="0 0 49.94 49.94"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                            </svg>
                          </button>
                          <button className="star" id="s3" score={3}>
                            <svg
                              enableBackground="new 0 0 49.94 49.94"
                              version="1.1"
                              viewBox="0 0 49.94 49.94"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                            </svg>
                          </button>
                          <button className="star" id="s4" score={4}>
                            <svg
                              enableBackground="new 0 0 49.94 49.94"
                              version="1.1"
                              viewBox="0 0 49.94 49.94"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                            </svg>
                          </button>
                          <button className="star" id="s5" score={5}>
                            <svg
                              enableBackground="new 0 0 49.94 49.94"
                              version="1.1"
                              viewBox="0 0 49.94 49.94"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m48.856 22.73c0.983-0.958 1.33-2.364 0.906-3.671-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865l-5.406-10.956c-0.607-1.231-1.839-1.996-3.212-1.996-1.372 0-2.604 0.765-3.211 1.996l-5.407 10.957c-0.23 0.467-0.676 0.79-1.191 0.865l-12.092 1.757c-1.359 0.197-2.467 1.131-2.892 2.438-0.424 1.307-0.077 2.713 0.906 3.671l8.749 8.528c0.373 0.364 0.544 0.888 0.456 1.4l-2.064 12.042c-0.183 1.06 0.095 2.091 0.781 2.904 1.066 1.267 2.927 1.653 4.415 0.871l10.814-5.686c0.452-0.237 1.021-0.235 1.472 0l10.815 5.686c0.526 0.277 1.087 0.417 1.666 0.417 1.057 0 2.059-0.47 2.748-1.288 0.687-0.813 0.964-1.846 0.781-2.904l-2.065-12.042c-0.088-0.513 0.083-1.036 0.456-1.4l8.749-8.529z" />
                            </svg>
                          </button>
                        </div>
                        <input
                          type="hidden"
                          id="review_score"
                          name="review_score"
                        />
                        <input
                          type="hidden"
                          name="review_product"
                          defaultValue={152294}
                        />
                        <input
                          type="hidden"
                          id="review_nonce"
                          name="review_nonce"
                          defaultValue="78e758ca5c"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          defaultValue="/iphone-11-128gb-black/"
                        />
                        <button
                          type="submit"
                          className="btn-add-to-review"
                          disabled="disabled"
                        >
                          Göndər
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
              <div
                className="tab-pane fade"
                id="third"
                role="tabpanel"
                aria-labelledby="third-tab"
              ></div>
              <div
                className="tab-pane fade"
                id="fourth"
                role="tabpanel"
                aria-labelledby="fourth-tab"
              ></div>
            </div>
          </div>
          {/* <section id="accordion-product-view" className>
            <ul className="accordion-menu accordion-menu-tabs">
              <li>
                <div className="dropdownlink">
                  Təsvir
                  <i className="fa fa-chevron-down" aria-hidden="true" />
                </div>
                <ul className="submenuItems">
                  <span style={{ fontWeight: 400 }}>
                    iPhone 11 Black sadəliyi üstün tutanların seçiminir. Premium
                    görünüşü və ağlasığmaz məhsuldarlığı ilə bu model
                    istifadəçilərinin məmnuniyyətini qısa müddət ərzində
                    qazanıb.
                  </span>
                  <h2>
                    <b>Dizayn və Displey</b>
                  </h2>
                  <span style={{ fontWeight: 400 }}>
                    Smartfonun qara korpusu parlaq və zərbələrə davamlı şüşə ilə
                    örtülüb. Yan çərçivə mat alüminiumdan hazırlanıb. Korpus
                    suya və toza qarşı IP68 qorunma dərəcəsinə sahibdir. Cihazı
                    təsadüfən suya salsanız belə daxili detallar zədələnməyəcək.
                    Telefonun ön hissəsində böyük LCD ekran yerləşdirilib.
                    Parlaq rənglər və mükəmməl kontrast sayəsində yüksək baxış
                    keyfiyyəti əldə edilir. Sevdiyiniz verilişi və ya serialın
                    yeni bölümünü smartfona yükləyib asanlıqla yolda izləyə
                    biləcəksiniz. Displeyin üst hissəsində FaceID skaneri
                    mövcuddur. Onun köməkliyi ilə cihazı etibarlı şəkildə
                    blokdan çıxaracaqsınız.
                  </span>
                  <h2>
                    <b>Prosessor və Batareya</b>
                  </h2>
                  <span style={{ fontWeight: 400 }}>
                    Apple smartfona A13 Bionic çipini yerləşdirib. Onun
                    köməkliyi ilə iPhone qrafikanı daha sürətli emal edə,
                    tapşırıqlarınızı saniyələr ərzində yerinə yetirə bilir.
                    Cihazda mail-lərinizi oxuyub sürətli cavablandıra, iş
                    fayllarını redaktə edib göndərə bilərsiniz. Ağır qrafikaya
                    sahib oyunları oynamağı sevirsinizsə iPhone modelinin qrafik
                    prosessoru sizi təəccübləndirəcək. Avtomobil yarışları və ya
                    döyüş zamanı görüntünün detallığından və parlaqlığından həzz
                    alacaqsınız. Məlumatlarınızın saxlanılması üçün 128 GB
                    daxili yaddaş təqdim edilib. Bu da yüzlərlə mahnıların,
                    şəkillərin, vacib falyyarın saxlanılması üçün kifayət edir.
                  </span>
                  <span style={{ fontWeight: 400 }}>
                    Adapteri rahat evdə yaddan çıxara bilərsiniz. 3110 mAh qədər
                    artırılmış batareya aktiv istifadədən sonra belə ilə
                    smartfona yüklədiyiniz filmi sona qədər izləməyə imkan
                    yaradır. iPhone 11 modelinin enerjisi ehtiyaclarınıza
                    kifayət edəcək.
                  </span>
                  <h2>
                    <b>Kameralar Bloku</b>
                  </h2>
                  <span style={{ fontWeight: 400 }}>
                    Hər kəsi heyran edən şəkillər yaratmaq üçün peşəkar
                    fotoapparat əldə etmək məcbur deyil. iPhone 11 kameraları
                    ilə yüksək keyfiyyətli şəkillər və 4K video çəkmək olar.
                    Bənzərsiz selfiləriniz üçün ön paneldə 12 meqapikselli
                    kamera mövcuddur. Daha mükəmməl nəticə üçün axra paneldə
                    yerləşən kamera blokundan istifadə edin. Geniş və ultra
                    geniş kameraların köməkliyi ilə bir toxunuşla fotoəsərlər
                    yaradacaqsınız.
                  </span>{" "}
                </ul>
              </li>
              <li>
                <div className="dropdownlink">
                  Xüsusiyyətlər
                  <i className="fa fa-chevron-down" aria-hidden="true" />
                </div>
                <ul className="submenuItems submenuItems_params submenuItems_params_mob">
                  <li>
                    <ul className="features-review-tabs left-items">
                      <li>
                        {" "}
                        <span>Ekran</span>
                        <span>6.1"</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Daxili yaddaş</span>
                        <span>128 GB</span>
                      </li>
                      <li>
                        {" "}
                        <span>Operativ yaddaş</span>
                        <span>4 GB</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Əsas kamera</span>
                        <span>12 MP + 12 MP</span>
                      </li>
                      <li>
                        {" "}
                        <span>Ön kamera</span>
                        <span>12 MP</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Nüvə sayı</span>
                        <span>6</span>
                      </li>
                      <li>
                        {" "}
                        <span>SIM kartların sayı</span>
                        <span>1</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>SIM kartın növü </span>
                        <span>Nano SIM</span>
                      </li>
                      <li>
                        {" "}
                        <span>Prosessorun adı</span>
                        <span>Apple</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Prosessor tezliyi</span>
                        <span>2.65 GHz</span>
                      </li>
                      <li>
                        {" "}
                        <span>Əməliyyat sistemi</span>
                        <span>iOS</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Əməliyyat sistemin versiyası</span>
                        <span>iOS 13</span>
                      </li>
                      <li>
                        {" "}
                        <span>3G</span>
                        <span>Var</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>4G</span>
                        <span>Var</span>
                      </li>
                      <li>
                        {" "}
                        <span>NFC</span>
                        <span>Var</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Prosessorun növü</span>
                        <span>Apple A13 Bionic (7 nm+)</span>
                      </li>
                      <li>
                        {" "}
                        <span>Şəbəkə</span>
                        <span>4G</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Displey növü</span>
                        <span>IPS LCD</span>
                      </li>
                      <li>
                        {" "}
                        <span>Simsiz enerji</span>
                        <span>Var</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>İnfraqırmızı port</span>
                        <span>Yox</span>
                      </li>
                      <li>
                        {" "}
                        <span>Göz tanıma funksiyası</span>
                        <span>Yox</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Suyadavamlılıq</span>
                        <span>Var</span>
                      </li>
                      <li>
                        {" "}
                        <span>Tozkeçirməzlik</span>
                        <span>Var</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Zərbəyədavamlılıq</span>
                        <span>Yox</span>
                      </li>
                      <li>
                        {" "}
                        <span>Üz tanıma</span>
                        <span>Var</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Sürətli enerji yığma</span>
                        <span>Var</span>
                      </li>
                      <li>
                        {" "}
                        <span>Ön fləş</span>
                        <span>Yox</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Qorunma dərəcəsi</span>
                        <span>IP68</span>
                      </li>
                      <li>
                        {" "}
                        <span>Ölçülər</span>
                        <span>150.9 × 75.7 × 8.3 mm</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Ekran rənglərinin sayı</span>
                        <span>16 mln</span>
                      </li>
                      <li>
                        {" "}
                        <span>Yaddaş kartı dəstəyi</span>
                        <span>Yox</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Barometr</span>
                        <span>Var</span>
                      </li>
                      <li>
                        {" "}
                        <span>Giroskop</span>
                        <span>Var</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>İşıq sensoru</span>
                        <span>Var</span>
                      </li>
                      <li>
                        {" "}
                        <span>Yaxınlaşdırma sensoru</span>
                        <span>Var</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Optik sabitləşmə</span>
                        <span>Var</span>
                      </li>
                      <li>
                        {" "}
                        <span>Video formatı</span>
                        <span>4K / 1080p</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Bluetooth versiyası</span>
                        <span>5.0</span>
                      </li>
                      <li>
                        {" "}
                        <span>Zoom (video)</span>
                        <span>3x-ə qədər</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Zoom (şəkil)</span>
                        <span>5x-ə qədər</span>
                      </li>
                      <li>
                        {" "}
                        <span>Avtofokus əsas kamera</span>
                        <span>Var</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Avtofokus ön kamera</span>
                        <span>Yox</span>
                      </li>
                      <li>
                        {" "}
                        <span>Video icazəsi və kadr tezliyi</span>
                        <span>4K - 1080p, 24-240 kadr/s</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Video asta çəkiliş</span>
                        <span>Var</span>
                      </li>
                      <li>
                        {" "}
                        <span>Rəng</span>
                        <span>Black</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Enerji toplama növü</span>
                        <span>Lightning</span>
                      </li>
                      <li>
                        {" "}
                        <span>LED bildiriş göstəricisi</span>
                        <span>Yox</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Qulaqlıq interfeysi</span>
                        <span>Lightning</span>
                      </li>
                      <li>
                        {" "}
                        <span>Çıxarıla bilən batareya</span>
                        <span>Yox</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Akselerometr</span>
                        <span>Var</span>
                      </li>
                      <li>
                        {" "}
                        <span>Enerji yığma gücü</span>
                        <span>18 Vt</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Batareyanın həcmi</span>
                        <span>3110 mAh</span>
                      </li>
                      <li>
                        {" "}
                        <span>İstehsal ili</span>
                        <span>2019</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Barmaq izi oxuyucusu</span>
                        <span>Yox</span>
                      </li>
                      <li>
                        {" "}
                        <span>Korpusun materialı</span>
                        <span>Metal və şüşə</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Görüntü imkanı</span>
                        <span>828 × 1792</span>
                      </li>
                      <li>
                        {" "}
                        <span>Çəki</span>
                        <span>194 q</span>
                      </li>
                      <li className="gray-line">
                        {" "}
                        <span>Seriya</span>
                        <span>iPhone 11</span>
                      </li>
                      <li>
                        {" "}
                        <span>İstehsalçı</span>
                        <span>Apple</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <div className="dropdownlink">
                  İstifadəçi rəyləri{" "}
                  <i className="fa fa-chevron-down" aria-hidden="true" />
                </div>
                <div className="submenuItems submenuItems_reviews"></div>
              </li>
            </ul>
          </section> */}
        </section>
      </div>
    </section>
  );
};

export default ProductView;
