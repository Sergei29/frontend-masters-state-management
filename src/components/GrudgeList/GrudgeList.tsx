import React, { useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { GrudgeContext } from "./ContextProvider/ContextProvider";
import Typography from "@material-ui/core/Typography";
//components:
import Form from "./components/Form";
import Grudge from "./components/Grudge";
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
const GrudgeList: React.FC<Props> = ({ classes }) => {
  const { arrGrudges, submitGrudge, toggleForgive, deleteGrudge } = useContext(
    GrudgeContext
  );

  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        className={classes.grudgeLIst__list__heading}
      >
        Grudges !
      </Typography>
      <Form submitCallback={submitGrudge} />
      <div className={classes.grudgeLIst__list}>
        {arrGrudges &&
          arrGrudges.length > 0 &&
          arrGrudges.map((objGrudge) => (
            <Grudge
              key={objGrudge.id}
              person={objGrudge.person}
              reason={objGrudge.reason}
              id={objGrudge.id}
              forgiven={objGrudge.forgiven}
              onForgive={toggleForgive}
              onDelete={deleteGrudge}
            />
          ))}
      </div>
    </div>
  );
};

export default withStyles(style)(GrudgeList);
