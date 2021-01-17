import React, { memo } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import withStyles from "@material-ui/core/styles/withStyles";

//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  funcOnClick: (...args: any) => void;
  title: string;
};

const AddButton: React.FC<Props> = ({ classes, funcOnClick, title }) => {
  return (
    <IconButton
      aria-label="add-todo"
      onClick={funcOnClick}
      className={classes.add__callToAction}
    >
      <Tooltip title={title}>
        <AddCircleOutlineIcon />
      </Tooltip>
    </IconButton>
  );
};

export default memo(withStyles(style)(AddButton));
