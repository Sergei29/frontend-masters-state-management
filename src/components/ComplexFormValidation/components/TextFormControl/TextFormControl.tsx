import React from "react";
import Classnames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import { FormControl, FormHelperText, TextField } from "@material-ui/core";
import { TextChangeEventType } from "../../types/types";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  strErrorMessage: string;
  strLabel: string;
  strName: string;
  strType: string;
  strValue: string;
  funcHandleChange: (objEvent: TextChangeEventType) => void;
};

const TextFormControl = ({
  classes,
  funcHandleChange,
  strErrorMessage,
  strLabel,
  strName,
  strType,
  strValue,
}: Props): JSX.Element => {
  return (
    <FormControl className={classes.formControl}>
      <TextField
        className={Classnames(classes.formControl__textField, {
          [classes.formControl__textFieldError]: false,
        })}
        label={strLabel}
        name={strName}
        type={strType}
        value={strValue}
        onChange={funcHandleChange}
        error={strErrorMessage.length > 0}
      />
      <FormHelperText className={classes.formControl__formHelper}>
        {strErrorMessage}
      </FormHelperText>
    </FormControl>
  );
};

export default withStyles(style)(TextFormControl);
