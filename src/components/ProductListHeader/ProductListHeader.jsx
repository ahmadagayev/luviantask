import React from "react";
import "./ProductListHeader.css";
import transferIcon from "../../assets/transfer.webp";
const ProductListHeader = () => {
  return (
    <div id="product-list-header">
      <div className="list-view-by list-view-by-cat">
        <div
          className="btn-group btn-group-neqd-kred"
          role="group"
          aria-label="Qiymətlər"
        >
          <button
            type="button"
            data-mode="cash"
            className="btn btn-secondary active"
          >
            Nağd
          </button>
          <button
            type="button"
            data-mode="monthly"
            className="btn btn-secondary"
          >
            Aylıq
          </button>
        </div>
        <div className="nav-container">
          <div className="center-nav border-right pr-3">
            <a href="#/">
              <img
                className="lazy"
                src={transferIcon}
                data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/transfer.png"
                alt=""
              />
              <p>Ucuzdan-bahaya</p>
            </a>
          </div>
          <div className="right-nav btn-filter-responsive">
            <svg
              viewBox="-4 0 393 393.99003"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m368.3125 0h-351.261719c-6.195312-.0117188-11.875 3.449219-14.707031 8.960938-2.871094 5.585937-2.3671875 12.3125 1.300781 17.414062l128.6875 181.28125c.042969.0625.089844.121094.132813.183594 4.675781 6.3125 7.203125 13.957031 7.21875 21.816406v147.796875c-.027344 4.378906 1.691406 8.582031 4.777344 11.6875 3.085937 3.105469 7.28125 4.847656 11.65625 4.847656 2.226562 0 4.425781-.445312 6.480468-1.296875l72.3125-27.574218c6.480469-1.976563 10.78125-8.089844 10.78125-15.453126v-120.007812c.011719-7.855469 2.542969-15.503906 7.214844-21.816406.042969-.0625.089844-.121094.132812-.183594l128.683594-181.289062c3.667969-5.097657 4.171875-11.820313 1.300782-17.40625-2.832032-5.511719-8.511719-8.9726568-14.710938-8.960938zm-131.53125 195.992188c-7.1875 9.753906-11.074219 21.546874-11.097656 33.664062v117.578125l-66 25.164063v-142.742188c-.023438-12.117188-3.910156-23.910156-11.101563-33.664062l-124.933593-175.992188h338.070312zm0 0" />
            </svg>
            <p> Filtr</p>
          </div>
        </div>
        <ul className="list-view">
          <li>
            <a href="#/">
              Ada görə (A-Z)
              <svg
                className="sgvup"
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#/">
              Ucuzdan-bahaya
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#/">
              Yeni məhsul
              <svg
                enableBackground="new 0 0 240.823 240.823"
                version="1.1"
                viewBox="0 0 240.823 240.823"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
              </svg>
            </a>
          </li>
          <li>
            <ul>
              <li>
                <img
                  className="lazy"
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                  data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/view.png"
                  alt=""
                />
              </li>
              <li>
                <a href="#/" className="view-no ">
                  16
                </a>
              </li>
              <li>
                <a href="#/" className="view-no active">
                  48
                </a>
              </li>
              <li>
                <a href="#/" className="view-no ">
                  72
                </a>
              </li>
              <li>
                <a href="#/" className="view-no ">
                  96
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductListHeader;
