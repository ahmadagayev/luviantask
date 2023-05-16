import React, { useState } from "react";
import "./ListItem.css";
import ListItemModal from "../ListItemModal/ListItemModal";
import heartIcon from "../../assets/heart-o.svg";
import comparisonIcon from "../../assets/comparisonnew.webp";
import { tokenRequest } from "../../js/auth";
const ListItem = ({ data, product }) => {
  //   console.log(data);
  const [show, setShow] = useState(false);
  const [productData, setProductData] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSpecificItem = (event) => {
    tokenRequest
      .get(`api/products/${data?.id}`)
      .then((response) => {
        console.log(response?.data);
        setProductData(response?.data);
        handleShow();
      })
      .catch((error) => {
        console.log(error);
        //   handleErrorData(error?.response);
      });
  };
  return (
    <React.Fragment>
      <div className="cart-item " id={data?.id} onClick={handleSpecificItem}>
        <div className="cart-body-top">
          <div className="imgHolder">
            <a href="https://kontakt.az/iphone-11-128gb-black/">
              <img
                className="lazy"
                alt={data?.mehusl_adi}
                src={data?.sekil}
                //   data-src="https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-0209_afabcf0b3a54bf947569ab162b09ec71_w.jpg"
              />
            </a>
            <div className="lbl-percentage-grid-2022">
              <div className="lbl-badge-2022 lbl-badge-2022-catdırılma">
                <p>pulsuz çatdırılma</p>
              </div>
            </div>
          </div>
          <div className="name">
            <a
              draggable="false"
              href="https://kontakt.az/iphone-11-128gb-black/"
            >
              {data?.mehsul_adi}
            </a>
          </div>
          <div className="cart-footer">
            <p className="gridprice gridprice_cash endirimvar">
              <span
                style={{
                  textDecoration: "line-through",
                  fontWeight: "normal",
                }}
              >
                {data?.kohne_qiymet} <small className="azn_span">M</small>
              </span>
              <br />
              <span className="nprice" id="price-152294">
                {data?.qiymet} <small className="azn_span">M</small>
              </span>
            </p>
            <p
              className="gridprice gridprice_monthly"
              style={{ display: "none" }}
            >
              <span className="nprice">110.1</span>
              <small className="azn_span">M</small> | 18 ay
            </p>
            <button
              className="btn-add-to-cart"
              data-text="Səbətə at"
              data-onclick-url="https://kontakt.az/iphone-11-128gb-black/"
              data-alternative-text="Almaq"
              data-id={152294}
              data-reserve-id={152294}
              data-mid="TM-DG-SBP-1105-SM-0209"
              data-price="1399.99"
            >
              Səbətə at
            </button>
          </div>
          <div className="cart-action">
            <button
              className="select-item"
              data-id={152294}
              data-reserve-id={152294}
              data-mid="TM-DG-SBP-1105-SM-0209"
              data-price="1399.99"
            >
              <div className="icon">
                <img
                  className="svgactive lazy"
                  src={heartIcon}
                  data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/heart-o.svg"
                />
              </div>
            </button>
            <button
              className="compare-button"
              data-id={152294}
              data-reserve-id={152294}
              data-mid="TM-DG-SBP-1105-SM-0209"
              data-price="1399.99"
            >
              <div className="icon">
                <img
                  className="lazy"
                  src={comparisonIcon}
                  data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/tb-comparisonnew.png"
                />
                <img
                  className="active lazy"
                  src={comparisonIcon}
                  data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/comparisonnew.png"
                />
              </div>
            </button>
            <button
              className="btn-add-to-cart textbasket"
              data-text="Səbətə at"
              data-onclick-url="https://kontakt.az/iphone-11-128gb-black/"
              data-alternative-text="Almaq"
              data-id={152294}
              data-reserve-id={152294}
              data-mid="TM-DG-SBP-1105-SM-0209"
              data-price="1399.99"
            >
              <span>Səbətə at</span>
            </button>
          </div>
        </div>
        {product && (
          <div className="cart-add">
            <ul>
              <li>
                <p>Ekran</p> <span> {data?.ekran} </span>
              </li>
              <li>
                <p>Daxili yaddaş</p> <span> {data?.daxili_yaddas}</span>
              </li>
              <li>
                <p>Operativ yaddaş</p> <span> {data?.operativ_yaddas} </span>
              </li>
            </ul>
            <div className="action">
              <button
                type="button"
                className="compare-button"
                data-id={152294}
                data-reserve-id={152294}
                data-mid="TM-DG-SBP-1105-SM-0209"
                data-price="1399.99"
              >
                <div className="icon">
                  <img
                    className="lazy"
                    src={comparisonIcon}
                    data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/tb-comparisonnew.png"
                  />
                  <img
                    className="active lazy"
                    src={comparisonIcon}
                    data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/comparisonnew.png"
                  />
                </div>
                <span>Müqayisə et</span>
              </button>
              <button
                type="button"
                className="select-item"
                data-id={152294}
                data-reserve-id={152294}
                data-mid="TM-DG-SBP-1105-SM-0209"
                data-price="1399.99"
              >
                <div className="icon">
                  <img
                    className="svgactive lazy"
                    src={heartIcon}
                    data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/heart-o.svg"
                  />
                </div>
                <span>Seçilmiş et</span>
              </button>
            </div>
          </div>
        )}
      </div>
      {productData && (
        <ListItemModal
          handleClose={handleClose}
          show={show}
          data={productData}
        />
      )}
    </React.Fragment>
  );
};

export default ListItem;
