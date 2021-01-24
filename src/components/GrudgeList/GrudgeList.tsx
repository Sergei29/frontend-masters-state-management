import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
//components:
import NewGrudgeForm from "./components/NewGrudgeForm";
import DataListGrudges from "./components/DataListGrudges";
import Grudges from "./components/Grudges";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};

/**
 * @description grudge list app
 * @param {Object} {classes MUI classes}
 * @returns {JSX} markup, grudges :)
 */
const GrudgeList: React.FC<Props> = ({ classes }): JSX.Element => {
  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        className={classes.grudgeLIst__list__heading}
      >
        Grudges !
      </Typography>
      <NewGrudgeForm />
      <DataListGrudges />
      <Grudges />
    </div>
  );
};

export default withStyles(style)(GrudgeList);
