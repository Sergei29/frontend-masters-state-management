import React from "react";
import { Typography } from "@material-ui/core";
// components:
import SetStateWithCallback from "../../components/SetStateWithCallback";

const SetStateWithCallbackPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h3"> Set sate with callback.</Typography>
      <SetStateWithCallback />
    </div>
  );
};

export default SetStateWithCallbackPage;
