import React, { useState, useEffect } from "react";
// import { Carousel } from "react-bootstrap";
import { tokenRequest } from "../../js/auth";
import "./ProductCarousel.css";
import Slider from "react-slick";
import ListItem from "../ListItem/ListItem";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const ProductCarousel = () => {
  const [listItems, setListItems] = useState();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // initialSlide: 0,
    // variableWidth: 900,
    adaptiveHeight: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    tokenRequest
      .get(`api/products/`)
      .then((response) => {
        console.log(response?.data?.results);
        setListItems(response?.data?.results);
        // handleShow();
        //   setValidated(false);
        //   handleSuccess(response?.data);
      })
      .catch((error) => {
        console.log(error);
        //   handleErrorData(error?.response);
      });
  }, []);
  return (
    <div className="seg-reco-wrapper seg-clear" style={{ display: "block" }}>
      <section id="best-seller-similar" className="universal-carousel">
        <div className="container">
          <article className="single-daily-discount-inner daily-discount-inner position-relative">
            <div className="section-header single">
              <div className="head1">Oxşar məhsullar </div>
            </div>
            <div className="shop-slider">
              <div className="slider-carousel">
                {/* <ProductCarousel /> */}
                <Slider {...settings}>
                  {listItems?.map((item) => (
                    <ListItem data={item} key={item.id} />
                  ))}
                </Slider>
              </div>
              <div className="all-offers"></div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ProductCarousel;
