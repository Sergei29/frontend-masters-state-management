import React from "react";
import { Typography } from "@material-ui/core";

const HomePage = () => {
  return (
    <div>
      <Typography variant="h1" align="center">
        Homepage
      </Typography>
      <Typography variant="subtitle1" color="primary">
        This app consists of TODO list and NASA News pages
      </Typography>
    </div>
  );
};

export default HomePage;
