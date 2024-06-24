import React from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Title from "../Title";
import "./style.scss";

const DetailsMovies = ({ data, handleClose }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box className="detailMoviesContainer">
      <div className="detailMovies">
        <span className="detailClose" onClick={handleClose}>
          x
        </span>
        <img
          src={`${data?.poster_path}`}
          alt={data?.title}
          onClick={handleClose}
        />
        <div className="detailMoviesTexts">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Title className="detailMoviesTitle">{data.title}</Title>
            <div>
              <Checkbox
                {...label}
                icon={<FavoriteBorder sx={{ color: "#fff", fontSize: 25 }} />}
                checkedIcon={<Favorite sx={{ color: "red", fontSize: 25 }} />}
              />
            </div>
          </Box>
          <Typography
            className="detailMoviesOverview"
            variant="h6"
            sx={{ mt: 2 }}
          >
            {data?.overview}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default DetailsMovies;
