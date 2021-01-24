import React, { useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { GrudgeContext } from "../../ContextProvider/ContextProvider";
//components:
import Grudge from "../Grudge";
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
const Grudges: React.FC<Props> = ({ classes }) => {
  const { arrGrudges } = useContext(GrudgeContext);

  return (
    <div className={classes.grudgeLIst__list}>
      {arrGrudges &&
        arrGrudges.length > 0 &&
        arrGrudges.map((objGrudge) => (
          <Grudge key={objGrudge.id} {...objGrudge} />
        ))}
    </div>
  );
};

export default withStyles(style)(Grudges);
