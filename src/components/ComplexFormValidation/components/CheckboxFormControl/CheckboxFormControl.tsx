import React from "react";
import Classnames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";

import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { InputChangeEventType } from "../../types/types";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  strErrorMessage: string;
  strLabel: string;
  strName: string;
  strType: string;
  strValue: string;
  funcHandleChange: (objEvent: InputChangeEventType) => void;
};

const CheckboxFormControl = ({
  classes,
  funcHandleChange,
  strErrorMessage,
  strLabel,
  strName,
  strType,
  strValue,
}: Props): JSX.Element => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={!!strValue}
            name={strName}
            onChange={funcHandleChange}
            color="primary"
            value={strValue}
          />
        }
        label={strLabel}
      />
      <FormHelperText className={classes.formControl__formHelper}>
        {strErrorMessage}
      </FormHelperText>
    </FormGroup>
  );
};

export default CheckboxFormControl;
