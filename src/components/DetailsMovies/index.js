import React from "react";
import { Box, Typography } from "@mui/material";
import "./style.scss";

const DetailsMovies = ({ data }) => {
  console.log(data);
  return (
    <Box className="detailMovies">
      <Typography className="detailMoviesTitle" variant="h4" align="center">
        {data?.title}
      </Typography>
      <img src={`${data?.poster_path}`} alt={data?.title} />
      <Typography className="detailMoviesOverview" variant="h6" sx={{ mt: 2 }}>
        {data?.overview}
      </Typography>
    </Box>
  );
};

export default DetailsMovies;
