import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";

// const Movies = () => {
//   const { data } = useGetMoviesQuery();
//   console.log(data);
//   return <div>Movies</div>;
// };
function Movies() {
  const { data } = useGetMoviesQuery(); //fetching data from an API
  console.log(data);

  return <div>Movies</div>;
}

export default Movies;
