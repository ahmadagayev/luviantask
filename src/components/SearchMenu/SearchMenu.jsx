import React, { useState } from "react";
import "./SearchMenu.css";
import infoImg from "../../assets/info.webp";
import { tokenRequest } from "../../js/auth";
const SearchMenu = ({
  handleCheckboxChange,
  handleMaxValue,
  handleMinValue,
  handleApply,
}) => {
  const handleActiveClass = (event) => {
    const button = event.currentTarget;

    if (button.classList.contains("active")) {
      console.log(button.nextElementSibling);
      const priceRange = button.nextElementSibling;
      priceRange.style.display = "none";
    } else {
      const priceRange = button.nextElementSibling;
      priceRange.style.display = "block";
    }
    button.classList.toggle("active");
  };

  return (
    <section id="search-menu" style={{ zIndex: 10000002 }}>
      <div className="row v-mob justify-content-end">
        <button type="button" className="btn-close">
          <svg
            enableBackground="new 0 0 47.971 47.971"
            version="1.1"
            viewBox="0 0 47.971 47.971"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
          </svg>
        </button>
      </div>
      <div className="menu">
        <form
          // role="form"
          className="filter-sidebar catformprod"
          //   action="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/"
        >
          <button
            type="button"
            className="btn-feature active"
            onClick={handleActiveClass}
          >
            <div className="icon">
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </div>
            Qiymət
            <a
              data-toggle="tooltip"
              data-placement="right"
              className="tooltip-info"
              data-html="true"
              href="#/"
              data-original-title
            >
              <img
                className="lazy"
                src={infoImg}
                // data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/info.png"
                alt=""
              />
            </a>
          </button>
          <div className="price-range sub-menu">
            <div className="form-row">
              <div className="col price-from">
                <input
                  type="number"
                  className="form-control"
                  id="from"
                  name="fqn"
                  onChange={handleMinValue}
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  id="to"
                  name="fqx"
                  onChange={handleMaxValue}
                />
              </div>
            </div>
          </div>
          {/* <div className="glbn_2_185_1683952719" /> */}
          <button
            type="button"
            className="btn-feature "
            onClick={handleActiveClass}
          >
            <div className="icon">
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </div>
            İstehsalçı
            <a
              data-toggle="tooltip"
              data-placement="right"
              className="tooltip-info"
              data-html="true"
              href="#/"
              data-original-title
            />
          </button>
          <div className="producer sub-menu" style={{ display: "none" }}>
            <ul className="multi-choice">
              <li>
                <input
                  type="checkbox"
                  className="phone_istehsalci_apple"
                  id="phone_istehsalci_apple"
                  name="istehsalci"
                  defaultValue="Apple"
                  onClick={handleCheckboxChange}
                />
                <label htmlFor="phone_istehsalci_apple">Apple</label>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn-feature "
            onClick={handleActiveClass}
          >
            <div className="icon">
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </div>
            Seriya
            <a
              data-toggle="tooltip"
              data-placement="right"
              className="tooltip-info"
              href="#/"
              data-html="true"
              data-original-title
            />
          </button>
          <div className="producer sub-menu" style={{ display: "none" }}>
            <ul className="multi-choice">
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_seriya_iphone-11"
                  id="phone_seriya_iphone-11"
                  name="seriya"
                  defaultValue="iPhone 11"
                />
                <label htmlFor="phone_seriya_iphone-11">iPhone 11</label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_seriya_iphone-13"
                  id="phone_seriya_iphone-13"
                  name="seriya"
                  defaultValue="iPhone 13"
                />
                <label htmlFor="phone_seriya_iphone-13">iPhone 13</label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_seriya_iphone-13-pro"
                  id="phone_seriya_iphone-13-pro"
                  name="seriya"
                  defaultValue="iPhone 13 Pro"
                />
                <label htmlFor="phone_seriya_iphone-13-pro">
                  iPhone 13 Pro
                </label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_seriya_iphone-13-pro-max"
                  id="phone_seriya_iphone-13-pro-max"
                  name="seriya"
                  defaultValue="iPhone 13 Pro Max"
                />
                <label htmlFor="phone_seriya_iphone-13-pro-max">
                  iPhone 13 Pro Max
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_seriya_iphone-13-mini"
                  id="phone_seriya_iphone-13-mini"
                  name="seriya"
                  defaultValue="iPhone 13 mini"
                />
                <label htmlFor="phone_seriya_iphone-13-mini">
                  iPhone 13 mini
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_seriya_iphone-14"
                  id="phone_seriya_iphone-14"
                  name="seriya"
                  defaultValue="iPhone 14"
                />
                <label htmlFor="phone_seriya_iphone-14">iPhone 14</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_seriya_iphone-14-plus"
                  onClick={handleCheckboxChange}
                  id="phone_seriya_iphone-14-plus"
                  name="seriya"
                  defaultValue="iPhone 14 Plus"
                />
                <label htmlFor="phone_seriya_iphone-14-plus">
                  iPhone 14 Plus
                </label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_seriya_iphone-14-pro"
                  id="phone_seriya_iphone-14-pro"
                  name="seriya"
                  defaultValue="iPhone 14 Pro"
                />
                <label htmlFor="phone_seriya_iphone-14-pro">
                  iPhone 14 Pro
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_seriya_iphone-14-pro-max"
                  id="phone_seriya_iphone-14-pro-max"
                  name="seriya"
                  defaultValue="iPhone 14 Pro Max"
                />
                <label htmlFor="phone_seriya_iphone-14-pro-max">
                  iPhone 14 Pro Max
                </label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_seriya_iphone-se-gen-3"
                  id="phone_seriya_iphone-se-gen-3"
                  name="seriya"
                  defaultValue="iPhone SE Gen.3"
                />
                <label htmlFor="phone_seriya_iphone-se-gen-3">
                  iPhone SE Gen.3
                </label>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn-feature "
            onClick={handleActiveClass}
          >
            <div className="icon">
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </div>
            Əməliyyat sistemi
            <a
              data-toggle="tooltip"
              data-placement="right"
              href="#/"
              className="tooltip-info"
              data-html="true"
              data-original-title
            />
          </button>
          <div className="producer sub-menu" style={{ display: "none" }}>
            <ul className="multi-choice">
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_emeliyyat_sistemi_ios"
                  id="phone_emeliyyat_sistemi_ios_645f144f74010"
                  name="emeliyyat_sistemi"
                  defaultValue="iOS"
                />
                <label htmlFor="phone_emeliyyat_sistemi_ios_645f144f74010">
                  iOS
                </label>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn-feature "
            onClick={handleActiveClass}
          >
            <div className="icon">
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </div>
            SIM kartların sayı
            <a
              data-toggle="tooltip"
              href="#/"
              data-placement="right"
              className="tooltip-info"
              data-html="true"
              data-original-title
            />
          </button>
          <div className="producer sub-menu" style={{ display: "none" }}>
            <ul className="multi-choice">
              <li>
                <input
                  type="checkbox"
                  className="phone_simkart_sayi_1"
                  id="phone_simkart_sayi_1"
                  onClick={handleCheckboxChange}
                  name="sim_kartlarin_sayi"
                  defaultValue={1}
                />
                <label htmlFor="phone_simkart_sayi_1">1</label>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn-feature "
            onClick={handleActiveClass}
          >
            <div className="icon">
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </div>
            Operativ yaddaş
            <a
              data-toggle="tooltip"
              data-placement="right"
              className="tooltip-info"
              href="#/"
              data-html="true"
              data-original-title
            />
          </button>
          <div className="producer sub-menu" style={{ display: "none" }}>
            <ul className="multi-choice">
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_operativ_yaddaw_4-gb"
                  id="phone_operativ_yaddaw_4-gb_645f144f74075"
                  name="operativ_yaddas"
                  defaultValue="4 GB"
                />
                <label htmlFor="phone_operativ_yaddaw_4-gb_645f144f74075">
                  4 GB
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_operativ_yaddaw_6-gb"
                  id="phone_operativ_yaddaw_6-gb_645f144f7407c"
                  name="operativ_yaddas"
                  defaultValue="6 GB"
                />
                <label htmlFor="phone_operativ_yaddaw_6-gb_645f144f7407c">
                  6 GB
                </label>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn-feature "
            onClick={handleActiveClass}
          >
            <div className="icon">
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </div>
            Daxili yaddaş
            <a
              data-toggle="tooltip"
              data-placement="right"
              className="tooltip-info"
              href="#/"
              data-html="true"
              data-original-title
            />
          </button>
          <div className="producer sub-menu" style={{ display: "none" }}>
            <ul className="multi-choice">
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_daxili_yaddaw_1-tb"
                  id="phone_daxili_yaddaw_1-tb_645f144f740c1"
                  name="daxili_yaddas"
                  defaultValue="1 TB"
                />
                <label htmlFor="phone_daxili_yaddaw_1-tb_645f144f740c1">
                  1 TB
                </label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_daxili_yaddaw_64-gb"
                  id="phone_daxili_yaddaw_64-gb_645f144f740c7"
                  name="daxili_yaddas"
                  defaultValue="64 GB"
                />
                <label htmlFor="phone_daxili_yaddaw_64-gb_645f144f740c7">
                  64 GB
                </label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_daxili_yaddaw_128-gb"
                  id="phone_daxili_yaddaw_128-gb_645f144f740cd"
                  name="daxili_yaddas"
                  defaultValue="128 GB"
                />
                <label htmlFor="phone_daxili_yaddaw_128-gb_645f144f740cd">
                  128 GB
                </label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_daxili_yaddaw_256-gb"
                  id="phone_daxili_yaddaw_256-gb_645f144f740d2"
                  name="daxili_yaddas"
                  defaultValue="256 GB"
                />
                <label htmlFor="phone_daxili_yaddaw_256-gb_645f144f740d2">
                  256 GB
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_daxili_yaddaw_512-gb"
                  onClick={handleCheckboxChange}
                  id="phone_daxili_yaddaw_512-gb_645f144f740d8"
                  name="daxili_yaddas"
                  defaultValue="512 GB"
                />
                <label htmlFor="phone_daxili_yaddaw_512-gb_645f144f740d8">
                  512 GB
                </label>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn-feature "
            onClick={handleActiveClass}
          >
            <div className="icon">
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </div>
            Ekran
            <a
              data-toggle="tooltip"
              data-placement="right"
              href="#/"
              className="tooltip-info"
              data-html="true"
              data-original-title
            />
          </button>
          <div className="producer sub-menu" style={{ display: "none" }}>
            <ul className="multi-choice">
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  id="phone_ekran_0"
                  name="ekran"
                  defaultValue="4,4.99"
                />
                <label htmlFor="phone_ekran_0">4”-4.99”</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  id="phone_ekran_1"
                  name="ekran"
                  defaultValue="5,5.99"
                />
                <label htmlFor="phone_ekran_1">5”-5.99”</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  id="phone_ekran_2"
                  name="ekran"
                  defaultValue="6,6.49"
                />
                <label htmlFor="phone_ekran_2">6”-6.49”</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  id="phone_ekran_3"
                  name="ekran"
                  defaultValue="6.5,6.99"
                />
                <label htmlFor="phone_ekran_3">6.5”-6.99”</label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  id="phone_ekran_4"
                  name="ekran"
                  defaultValue="7 və yuxarı"
                />
                <label htmlFor="phone_ekran_4">7” və yuxarı</label>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn-feature "
            onClick={handleActiveClass}
          >
            <div className="icon">
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </div>
            Rəng
            <a
              data-toggle="tooltip"
              data-placement="right"
              className="tooltip-info"
              data-html="true"
              data-original-title
            />
          </button>
          <div className="producer sub-menu" style={{ display: "none" }}>
            <ul className="multi-choice">
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_reng_yellow"
                  id="phone_reng_yellow_645f144f74348"
                  name="reng"
                  defaultValue="Yellow"
                />
                <label htmlFor="phone_reng_yellow_645f144f74348">Yellow</label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_reng_deep-purple"
                  id="phone_reng_deep-purple_645f144f74350"
                  name="reng"
                  defaultValue="Deep Purple"
                />
                <label htmlFor="phone_reng_deep-purple_645f144f74350">
                  Deep Purple
                </label>
              </li>
              <li>
                <input
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  className="phone_reng_starlight"
                  id="phone_reng_starlight_645f144f74356"
                  name="reng"
                  defaultValue="Starlight"
                />
                <label htmlFor="phone_reng_starlight_645f144f74356">
                  Starlight
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_reng_silver"
                  id="phone_reng_silver_645f144f7435c"
                  name="reng"
                  defaultValue="Silver"
                />
                <label htmlFor="phone_reng_silver_645f144f7435c">Silver</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_reng_gold"
                  id="phone_reng_gold_645f144f74361"
                  onClick={handleCheckboxChange}
                  name="reng"
                  defaultValue="Gold"
                />
                <label htmlFor="phone_reng_gold_645f144f74361">Gold</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_reng_space-black"
                  id="phone_reng_space-black_645f144f74367"
                  onClick={handleCheckboxChange}
                  name="reng"
                  defaultValue="Space Black"
                />
                <label htmlFor="phone_reng_space-black_645f144f74367">
                  Space Black
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_reng_black"
                  id="phone_reng_black_645f144f7436c"
                  onClick={handleCheckboxChange}
                  name="reng"
                  defaultValue="Black"
                />
                <label htmlFor="phone_reng_black_645f144f7436c">Black</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_reng_purple"
                  id="phone_reng_purple_645f144f74371"
                  name="reng"
                  defaultValue="Purple"
                />
                <label htmlFor="phone_reng_purple_645f144f74371">Purple</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_reng_midnight"
                  onClick={handleCheckboxChange}
                  id="phone_reng_midnight_645f144f74377"
                  name="reng"
                  defaultValue="Midnight"
                />
                <label htmlFor="phone_reng_midnight_645f144f74377">
                  Midnight
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_reng_blue"
                  id="phone_reng_blue_645f144f7437c"
                  name="reng"
                  defaultValue="Blue"
                />
                <label htmlFor="phone_reng_blue_645f144f7437c">Blue</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_reng_red"
                  onClick={handleCheckboxChange}
                  id="phone_reng_red_645f144f74381"
                  name="reng"
                  defaultValue="Red"
                />
                <label htmlFor="phone_reng_red_645f144f74381">Red</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_reng_alpine-green"
                  id="phone_reng_alpine-green_645f144f74387"
                  name="reng"
                  defaultValue="Alpine Green"
                />
                <label htmlFor="phone_reng_alpine-green_645f144f74387">
                  Alpine Green
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={handleCheckboxChange}
                  className="phone_reng_green"
                  id="phone_reng_green_645f144f7438c"
                  name="reng"
                  defaultValue="Green"
                />
                <label htmlFor="phone_reng_green_645f144f7438c">Green</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_reng_graphite"
                  id="phone_reng_graphite_645f144f74392"
                  onClick={handleCheckboxChange}
                  name="reng"
                  defaultValue="Graphite"
                />
                <label htmlFor="phone_reng_graphite_645f144f74392">
                  Graphite
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_reng_pink"
                  onClick={handleCheckboxChange}
                  id="phone_reng_pink_645f144f74397"
                  name="reng"
                  defaultValue="Pink"
                />
                <label htmlFor="phone_reng_pink_645f144f74397">Pink</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="phone_reng_white"
                  id="phone_reng_white_645f144f7439c"
                  onClick={handleCheckboxChange}
                  name="reng"
                  defaultValue="White"
                />
                <label htmlFor="phone_reng_white_645f144f7439c">White</label>
              </li>
            </ul>
          </div>
          <div className="form-group" id="sticky_sidebar_filter_button_div">
            <button
              type="submit"
              className="btn btn-action btn-submit"
              // onClick="setTimeout(function(){jQuery('.btn-submit').prop('disabled','disabled');},200)"
              style={{
                width: "80%",
                marginBottom: 30,
                marginLeft: "10%",
                marginTop: 50,
                background: "rgb(255, 0, 60)",
                color: "white",
                fontWeight: 500,
              }}
              onClick={handleApply}
            >
              Tətbiq et
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchMenu;
