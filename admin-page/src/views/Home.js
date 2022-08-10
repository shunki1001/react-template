import { Box } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Home = () => {
  const { test } = useContext(DataContext);
  return <Box sx={{ mt: 10 }}>{test}</Box>;
};

export default Home;
