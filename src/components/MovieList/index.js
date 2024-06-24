import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Modal } from "@mui/material";
import { moviesItems } from "../../utils/dbMovies";
import Title from "../Title";
import DetailsMovies from "../DetailsMovies";
import "./style.scss";

const MovieList = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [dataItem, setDataItem] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = (item) => {
    setDataItem(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let slidesAmount;

      switch (true) {
        case width <= 600:
          slidesAmount = 1;
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
    //swipeToSlide: true,
    //focusOnSelect: true,
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
              return category.data.length >= 3 ? (
                <div key={category.title}>
                  <Title style={{ margin: "0 10px 15px" }}>
                    {category.title}
                  </Title>
                  {category.data && (
                    <Slider className="styledCarousel" {...settings}>
                      {category.data.map((item, index) => (
                        <div key={index} onClick={() => handleOpen(item)}>
                          <div className="dataContainer" key={index}>
                            <img src={`${item.poster_path}`} alt={item.title} />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>
              ) : (
                <></>
              );
            })}
        </>
      </motion.div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <DetailsMovies data={dataItem} handleClose={handleClose} />
        </div>
      </Modal>
    </section>
  );
};

export default MovieList;
