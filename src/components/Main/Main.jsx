import React, { useEffect, useState } from "react";
import ProductSearch from "../ProductSearch/ProductSearch";
import Pagination from "../Pagination/Pagination";
import { tokenRequest } from "../../js/auth";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "./Main.css";
const Main = () => {
  const [listItems, setListItems] = useState();
  const [nextLink, setNextLink] = useState();
  const [countProduct, setCountProduct] = useState();
  const [prevLink, setPrevLink] = useState();
  const [collapsed, setCollapsed] = useState(false);
  // const [minValue, setMinValue] = useState();
  // const [maxValue, setMaxValue] = useState();
  const queryParams = new URLSearchParams();
  const handleMinValue = (e) => {
    const { value } = e.target;
    if (queryParams.has("minq")) {
      queryParams.set("minq", value);
    } else {
      queryParams.append("minq", value);
    }
    // setMinValue(value);
  };
  const handleMaxValue = (e) => {
    const { value } = e.target;
    if (queryParams.has("maxq")) {
      queryParams.set("maxq", value);
    } else {
      queryParams.append("maxq", value);
    }
  };
  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    if (checked) {
      // Append the parameter if the checkbox is checked
      queryParams.append(name, value);
    } else {
      for (const [paramName, paramValue] of queryParams.entries()) {
        if (paramName === name && paramValue === value) {
          queryParams.delete(paramName);
        }
      }
    }
  };

  const handleApply = (e) => {
    e.preventDefault();
    // let urlValue = "";
    // if (minValue && maxValue) {
    //   console.log(minValue, maxValue);
    //   urlValue = `api/products/?minq=${minValue}&maxq=${maxValue}`;
    // } else if (minValue) {
    //   urlValue = `api/products/?minq=${minValue}`;
    // } else if (maxValue) {
    //   urlValue = `api/products/?maxq=${maxValue}`;
    // }

    // if (minValue || maxValue) {
    //   console.log(urlValue);
    //   tokenRequest
    //     .get(urlValue)
    //     .then((response) => {
    //       console.log(response.data);
    //       setListItems(response?.data?.results);
    //       setPrevLink(response?.data?.previous);
    //       setCountProduct(response?.data?.count);
    //       setNextLink(response?.data?.next);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    console.log(queryParams.toString());
    const queryString = queryParams.toString();
    const url = `api/products/?${queryString}`;
    tokenRequest
      .get(url)
      .then((response) => {
        console.log(response.data);
        setListItems(response?.data?.results);
        setPrevLink(response?.data?.previous);
        setCountProduct(response?.data?.count);
        setNextLink(response?.data?.next);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    tokenRequest
      .get(`api/products/`)
      .then((response) => {
        console.log(response);
        setListItems(response?.data?.results);
        setPrevLink(response?.data?.previous);
        setNextLink(response?.data?.next);
        setCountProduct(response?.data?.count);
        // handleShow();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handlePrevAndNextLink = (link, page) => {
    tokenRequest
      .get(`${link}`)
      .then((response) => {
        console.log(response);
        setListItems(response?.data?.results);
        setPrevLink(response?.data?.previous);
        setCountProduct(response?.data?.count);
        setNextLink(response?.data?.next);
        if (page === "next") {
          const currentPage = document.querySelector(".wp-pagenavi .current");

          // Get the next page number span element
          const nextPage = currentPage.nextElementSibling;
          // Move the "current" class from the current page to the next page
          currentPage.classList.remove("current");
          nextPage.classList.add("current");
          // prevButton.style.display="block"
        } else if (page === "prev") {
          const currentPage = document.querySelector(".wp-pagenavi .current");

          // Get the next page number span element
          const prevPage = currentPage.previousElementSibling;

          // Move the "current" class from the current page to the next page
          currentPage.classList.remove("current");
          prevPage.classList.add("current");
        }
        // handleShow();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCoxaltVəAzalt = () => {
    setCollapsed(!collapsed);
  };
  return (
    <main>
      <section id="product-search">
        <div className="container">
          <div className="row" style={{ margin: 0, marginBottom: 10 }}>
            <div className="col-sm-16" style={{ width: "100%" }}>
              <h1 className="page-title nm-t ustmetnh1 ">Apple</h1>
            </div>
          </div>
          <ProductSearch
            listItems={listItems}
            handleCheckboxChange={handleCheckboxChange}
            handleMaxValue={handleMaxValue}
            handleMinValue={handleMinValue}
            handleApply={handleApply}
          />
          <Pagination
            handlePrevAndNextLink={handlePrevAndNextLink}
            nextLink={nextLink}
            prevLink={prevLink}
            countProduct={countProduct}
          />
          <ProductCarousel />
          <div
            className="row ustmetnrow"
            style={{ margin: 0, marginBottom: 10 }}
          >
            <div className="col-sm-16 ustmetncol" style={{ width: "100%" }}>
              <div className="collapser collapser_ust">
                <div
                  className={`${
                    collapsed ? "" : "collapser_ust_in"
                  } collapser_ust_in_res`}
                >
                  Apple smartfonların hansı xüsusiyyətləri ilə rəqiblərindən
                  fərqlənir? Şirkətin smartfonları standart keyfiyyətə nəzarət
                  testlərindən keçərək istifadəçilərə təklif olunur. Apple
                  smartfon modelləri hər il brendin payız aylarında təşkil
                  etdiyi böyük təqdimat ilə tanıtdırılır. Modellərini ildə bir
                  dəfə yeniləyən şirkət, hazırda bazarda bir çox smartfon
                  modellərinə sahibdir. Ən son təqdim olunan iPhone 11 ailəsi ən
                  geniş ekran və ən uzun batareya ömrü olan Apple
                  cihazlarındandır. Əməliyyat sistemi versiyasındakı mövcud
                  əməliyyat sistemi iPhone 4S və daha üstün olan bütün modelləri
                  dəstəkləyir. Əməliyyat sistemi və cihaz uyğunluğu hüququ verən
                  IPhone telefonları öz daxili ekosistemlərində ən yüksək
                  göstəriciləri təqdim edir. Bütün Apple cihazları ilə bir
                  hesabla sinxronizasiya olunan IPhone modelləri yüksək
                  səviyyəli təhlükəsizlik tədbirləri ilə cihazınızı zərər və
                  oğurluq təhlükələrindən qoruyur. IPhone 12-nin qiymətlərinin
                  müəyyənləşdirilməsi üçün isə hal-hazırda modelin təqdimat
                  tarixi gözlənilir.
                  <h2>İphone 12, İphone 13 və Apple watch haqqında.</h2>
                  <blockquote>
                    Apple-in hər il maraqla gözlənilən payız təqdimatı baş
                    tutdu. Məlum olduğu üzərə təqdimatda İphone 13 - lərin
                    görünüşü, xüsusiyyətləri haqqında məlumatlar verilməklə
                    yanaşı İphone ailəsinə daha 2 məhsul da qatıldığı bəlli
                    oldu. AirPods Pro 3 və VII nəsil Apple Watch. Bütün Apple
                    ailəsinə məxsus olan məhsulların dizaynına və
                    xüsusiyyətlərinə rəsmi şəkildə şahid olduq və sizlər üçün
                    həmin məlumatları ətraflı şəkildə qeyd edirik. Aşağıda qeyd
                    olunan məlumatlarda ətraflı izah verilmişdir.
                  </blockquote>
                  <h2>iPhone-da Back Tap istifadə edin!</h2>
                  iOS 14-də Back Tap ilə siz iPhone-un arxasına cəld iki və ya
                  üç dəfə toxunmaqla İdarəetmə Mərkəzini aça, skrinşot çəkə,
                  əlçatanlıq üçün xüsusi hərəkətləri işə sala və s. edə
                  bilərsiniz.
                  <strong>Geriyə toxunun funksiyasından etmək üçün;</strong>
                  <ul>
                    <li>
                      İPhone 8 və ya daha yeni telefonunuzda iOS-un ən son
                      versiyasının quraşdırıldığına əmin olun.
                    </li>
                    <li>
                      Parametrlər &gt; Əlçatanlıq &gt; Klikləyin və Geriyə
                      vurun.
                    </li>
                    <li>İki və ya üç dəfə toxunun və hərəkət seçin.</li>
                    <li>
                      Quraşdırdığınız hərəkəti işə salmaq üçün iPhone-un
                      arxasına iki və ya üç dəfə toxunun.
                    </li>
                    <li>
                      AssistiveTouch, Siri Qısayolları, Böyüdücü, Əlçatanlıq və
                      VoiceOver kimi xüsusiyyətlərə cəld daxil olmaq üçün
                      Əlçatımlılıq Qısayolunu işə salmaq üçün iki və ya üç dəfə
                      toxuna bilərsiniz.
                    </li>
                  </ul>
                  <br />
                  <br />
                </div>
                <div className="clear clearfix" />
                <p
                  style={{ textAlign: "right" }}
                  className="dahacoxgoster dahacoxgoster_new"
                >
                  <a href="#/" className="a-collapse" data-toggle="collapse">
                    <span
                      className="coxspan coxazspan"
                      onClick={handleCoxaltVəAzalt}
                      style={{ display: collapsed ? "none" : "block" }}
                    >
                      Daha çox göstər
                    </span>
                    <span
                      className="azspan coxazspan"
                      style={{ display: collapsed ? "block" : "none" }}
                      onClick={handleCoxaltVəAzalt}
                    >
                      Daha az göstər
                    </span>
                    <i className="fa fa-chevron-down" />
                    <i
                      className="fa fa-chevron-up"
                      style={{ display: collapsed ? "block" : "none" }}
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
