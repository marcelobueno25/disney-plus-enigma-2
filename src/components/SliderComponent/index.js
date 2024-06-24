/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { slideImages } from "../../utils/dbslider.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "5%",
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    dots: true,
  };

  return (
    <section className="sliderComponent">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0 }}
      >
        <Slider className="styledCarousel" {...settings}>
          {slideImages.map((image, index) => (
            <Link
              //to={`/disney-plus-clone/${image.path}/${image.id}`}
              key={index}
            >
              <div className="styledItemContainer" key={index}>
                <img src={image.img} alt={image.title} loading="lazy" />
              </div>
            </Link>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default SliderComponent;
