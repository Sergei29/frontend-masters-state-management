import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Switch,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import withStyles from "@material-ui/core/styles/withStyles";
import { GrudgeContext } from "../../ContextProvider/ContextProvider";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  person: string;
  reason: string;
  id: string;
  forgiven: boolean;
};

/**
 * @description func component: single item list
 * @param {Object} {classes MUI classes
 * @param {String} person name
 * @param {String} reason reason why
 * @param {String} id unique id
 * @param {Boolean} forgiven is forgiven or not
 * @returns {JSX} markup
 */
const Grudge: React.FC<Props> = ({
  classes,
  person,
  reason,
  id,
  forgiven,
}): JSX.Element => {
  const { toggleForgive, deleteGrudge } = useContext(GrudgeContext);

  const switchForgive = () => toggleForgive(id);
  const deleteHandler = () => deleteGrudge(id);

  const strItemClass = forgiven
    ? classes.grudgeLIst__item_forgiven
    : classes.grudgeLIst__item_notForgiven;

  return (
    <Card className={strItemClass}>
      <CardContent>
        <Typography>{person}</Typography>
        <Typography>{reason}</Typography>

        <div className={classes.grudgeLIst__item__switch}>
          <Typography>{forgiven ? "forgiven: " : "not forgiven: "}</Typography>
          <Tooltip title={forgiven ? "Unforgive" : "Forgive"}>
            <Switch
              checked={forgiven}
              name="forgiven"
              onChange={switchForgive}
            />
          </Tooltip>
        </div>
        <Tooltip title="Delete the grudge">
          <IconButton onClick={deleteHandler}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardContent>
    </Card>
  );
};

export default withStyles(style)(Grudge);
