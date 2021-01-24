import React, { useContext, memo } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { GrudgeContext } from "./ContextProvider/ContextProvider";
import Typography from "@material-ui/core/Typography";
//components:
import Form from "./components/Form";
import Grudge from "./components/Grudge";
import DataListGrudges from "./components/DataListGrudges";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};

/**
 * @description list component
 * @param {Object} {classes MUI classes}
 * @returns {JSX} markup, list of grudges :)
 */
const GrudgeList: React.FC<Props> = ({ classes }): JSX.Element => {
  const { arrGrudges } = useContext(GrudgeContext);

  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        className={classes.grudgeLIst__list__heading}
      >
        Grudges !
      </Typography>
      <Form />
      <DataListGrudges />
      <div className={classes.grudgeLIst__list}>
        {arrGrudges &&
          arrGrudges.length > 0 &&
          arrGrudges.map((objGrudge) => (
            <Grudge key={objGrudge.id} {...objGrudge} />
          ))}
      </div>
    </div>
  );
};

export default memo(withStyles(style)(GrudgeList));
