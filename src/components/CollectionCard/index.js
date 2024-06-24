/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./style.scss";

const CollectionCard = ({ item, index }) => {
  return (
    <Grid item key={index} xs={3} md={1}>
      <Link to={`/disney-plus-clone/collection/${item.query}`}>
        <div className="itemContainer">
          <img src={item.img} alt={item.title} loading="lazy" />
          <video autoPlay loop muted playsInline>
            <source src={item.video} type="video/mp4" />
          </video>
        </div>
      </Link>
    </Grid>
  );
};

export default CollectionCard;
