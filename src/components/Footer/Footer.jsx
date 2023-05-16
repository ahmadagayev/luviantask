import React from "react";
import "./Footer.css";
import mobIcon from "../../assets/mob (1).webp";
import mobRedIcon from "../../assets/mob-red.webp";
import numberIcon from "../../assets/number.webp";
import masterIcon from "../../assets/master.webp";
import visaIcon from "../../assets/visa.webp";
import locationIcon from "../../assets/location.webp";
import locationRedIcon from "../../assets/location-red.webp";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="trrs ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="links">
                <ul>
                  <li>İnformasiya</li>
                  <li>
                    <a href="#/">Konfidensiallıq siyasəti</a>
                  </li>
                  <li>
                    <a href="#/">Hissə-hissə ödəniş şərtləri</a>
                  </li>
                  <li>
                    <a href="#/">Geri qaytarma siyasəti</a>
                  </li>
                  <li>
                    <a href="#/">Aylıq ödənişlərin həyata keçməsi</a>
                  </li>
                  <li>
                    <a href="#/">Servis Mərkəzləri</a>
                  </li>
                </ul>{" "}
                <ul>
                  <li>Müştərilər</li>
                  <li>
                    <a href="#/">Saytın istifadə şərtləri</a>
                  </li>
                  <li>
                    <a href="#/">Korporativ satışlar</a>
                  </li>
                  <li>
                    <a href="#/">Zəmanətlər</a>
                  </li>
                  <li>
                    <a href="#/">Şikayətlərin idarəolunma siyasəti</a>
                  </li>
                  <li>
                    <a href="#/">Ən yaxşı qiymətə zəmanət!</a>
                  </li>
                </ul>{" "}
                <ul>
                  <li>Şirkət</li>
                  <li>
                    <a href="#/">Şirkət haqqında</a>
                  </li>
                  <li>
                    <a href="#/">Karyera</a>
                  </li>
                  <li>
                    <a href="#/">“Qarabağ” Proqramı</a>
                  </li>
                </ul>
              </div>
              <div className="payment mob">
                <ul style={{ marginLeft: "-4px" }}>
                  <li>
                    <img
                      className="lazy"
                      src={visaIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/2021/visa.png"
                    />
                  </li>
                  <li>
                    <img
                      className="lazy"
                      src={masterIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/2021/master.png"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="desktop-title head6title">Əlaqə</div>
              <div className="head6title mob-title">Məlumat mərkəzi</div>
              <div className="contact">
                <div className="phone">
                  <div className="icon">
                    <img
                      className="lazy"
                      src={mobIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/mob.png"
                    />
                    <img
                      className="active lazy"
                      src={mobRedIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/mob-red.png"
                    />
                  </div>
                  <a href="#/">*6060</a>
                </div>
                <div className="email-address">
                  <a href="#/">info@kontakt.az</a>
                </div>
                <div className="location">
                  <div className="icon">
                    <img
                      className="lazy"
                      src={locationIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/location.png"
                    />
                    <img
                      className="active lazy"
                      src={locationRedIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/location-red.png"
                    />
                  </div>
                  <a href="#/">Mağazalarımız xəritədə</a>
                </div>
              </div>
              <div className="contact">
                <div className="phone">
                  <div className="icon iconnomre">
                    <img
                      className="lazy"
                      src={numberIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/number.png"
                    />
                    <img
                      className="active lazy"
                      src={numberIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/number.png"
                    />
                  </div>
                  <a href="tel:+994123102424">012 310 24 24</a>
                </div>
              </div>
              <div className="social-link">
                <div className="head6title">Bizimlə qalın</div>
                <ul style={{ marginLeft: "-10px" }}>
                  <li>
                    <a className="bgst-fb icon" target="_blank" href="#/"></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="#/"
                      className="icon bgst-youtube"
                    ></a>
                  </li>
                  <li className="ig">
                    <div className="icon bgst-insta"></div>
                    <div className="ig-links">
                      <a target="_blank" href="#/">
                        Kontakt Home
                      </a>
                      <a target="_blank" href="#/">
                        Kontakt Home Mebel
                      </a>
                    </div>
                  </li>
                  <li>
                    <a className="bgst-linkedin" target="_blank" href="#/"></a>
                  </li>
                  <li>
                    <a className="bgst-wp" target="_blank" href="#/"></a>
                  </li>
                  <li>
                    <a className="bgst-telegram" target="_blank" href="#/"></a>
                  </li>
                  <li>
                    <a
                      className="bgst-tiktok"
                      target="_blank"
                      href="https://vm.tiktok.com/ZSJRp5gYp/"
                    ></a>
                  </li>
                </ul>
              </div>
              <div className="payment ">
                <ul>
                  <li>
                    <img
                      className="lazy"
                      src={visaIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/2021/visa.png"
                    />
                  </li>
                  <li>
                    <img
                      className="lazy"
                      src={masterIcon}
                      data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/2021/master.png"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="copy-right">
                <p>© 2023 Kontakt Home </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
