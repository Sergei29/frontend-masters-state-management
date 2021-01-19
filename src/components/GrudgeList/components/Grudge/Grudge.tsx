import React from "react";
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
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  person: string;
  reason: string;
  id: string;
  forgiven: boolean;
  onForgive: (id: string) => void;
  onDelete: (id: string) => void;
};

const Grudge: React.FC<Props> = ({
  classes,
  person,
  reason,
  id,
  forgiven,
  onForgive,
  onDelete,
}) => {
  const switchForgive = () => onForgive(id);
  const deleteHandler = () => onDelete(id);

  return (
    <Card className={classes.grudgeLIst__item}>
      <CardContent>
        <Typography>{person}</Typography>
        <Typography>{reason}</Typography>

        <div className={classes.grudgeLIst__item__switch}>
          <Typography>{forgiven ? "forgiven: " : "not forgiven: "}</Typography>

          <Switch checked={forgiven} name="forgiven" onChange={switchForgive} />
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
