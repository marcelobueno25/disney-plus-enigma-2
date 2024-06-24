import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { moviesItems } from "../../utils/dbMovies";
import Title from "../Title";
import "./style.scss";

const MovieList = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let slidesAmount;

      switch (true) {
        case width <= 400:
          slidesAmount = 1;
          break;
        case width <= 600:
          slidesAmount = 2;
          break;
        case width <= 900:
          slidesAmount = 2;
          break;
        case width <= 1100:
          slidesAmount = 3;
          break;
        default:
          slidesAmount = 3;
          break;
      }

      setSlidesToShow(slidesAmount);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplaySpeed: 5000,
    //centerMode: true,
    centerPadding: "5%",
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <section className="movieList">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <>
          {moviesItems &&
            moviesItems?.map((category) => {
              return (
                <div key={category.category}>
                  <Title style={{ margin: "0 10px 15px" }}>
                    {category.title}
                  </Title>
                  {category.data && (
                    <Slider className="styledCarousel" {...settings}>
                      {category.data.map((item, index) => (
                        <Link
                          //to={`/disney-plus-clone/${category.type}/${item.id}`}
                          key={index}
                        >
                          <div className="dataContainer" key={index}>
                            <img src={`${item.poster_path}`} alt={item.title} />
                          </div>
                        </Link>
                      ))}
                    </Slider>
                  )}
                  {/* {!category.data && (
                      <ErrorBlock
                        message={`Failed to fetch ${category.title} data, please try again later.`}
                      />
                    )} */}
                </div>
              );
            })}
        </>
      </motion.div>
    </section>
  );
};

export default MovieList;
