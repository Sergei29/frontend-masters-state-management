import React from "react";
import Classnames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  FormControl,
  FormHelperText,
  Select,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { SelectChangeEventType, ObjOptionType } from "../../types/types";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  arrOptions: ObjOptionType[];
  classes: ClassesType;
  strErrorMessage: string;
  strLabel: string;
  strName: string;
  strType: string;
  strValue: string;
  funcHandleChange: (objEvent: SelectChangeEventType) => void;
};

const SelectFormControl = ({
  arrOptions,
  classes,
  funcHandleChange,
  strErrorMessage,
  strLabel,
  strName,
  strType,
  strValue,
}: Props): JSX.Element => {
  const renderOptions = () =>
    arrOptions.map(({ value, name }) => (
      <MenuItem key={`${value}_${name}`} value={value}>
        {name}
      </MenuItem>
    ));

  return (
    <FormControl className={classes.formControl}>
      <Select
        className={Classnames(classes.formControl__selectField, {
          [classes.formControl__selectFieldError]: false,
        })}
        label={strLabel}
        name={strName}
        type={strType}
        value={strValue}
        onChange={funcHandleChange}
        error={strErrorMessage.length > 0}
      >
        {renderOptions()}
      </Select>
      <FormHelperText className={classes.formControl__formHelper}>
        {strErrorMessage}
      </FormHelperText>
    </FormControl>
  );
};

export default withStyles(style)(SelectFormControl);
