import React from "react";
import { Box, Typography } from "@mui/material";
import Title from "../Title";
import "./style.scss";

const DetailsMovies = ({ data, handleClose }) => {
  return (
    <Box className="detailMoviesContainer" onClick={handleClose}>
      <div className="detailMovies">
        <img src={`${data?.poster_path}`} alt={data?.title} />
        <Title className="detailMoviesTitle">{data.title}</Title>
        <Typography
          className="detailMoviesOverview"
          variant="h6"
          sx={{ mt: 2 }}
        >
          {data?.overview}
        </Typography>
      </div>
    </Box>
  );
};

export default DetailsMovies;
