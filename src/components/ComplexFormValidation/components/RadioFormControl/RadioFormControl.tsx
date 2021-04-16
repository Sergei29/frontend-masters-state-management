import React from "react";
import Classnames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { InputChangeEventType, ObjOptionType } from "../../types/types";
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
  funcHandleChange: (objEvent: InputChangeEventType) => void;
};

const RadioFormControl = ({
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
      <FormControlLabel
        key={value + name}
        value={value}
        control={<Radio />}
        label={name}
        className={classes.formControl__radioField__radio}
      />
    ));

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">{strLabel}</FormLabel>
      <RadioGroup
        aria-label={strName}
        name={strName}
        value={strValue}
        onChange={funcHandleChange}
        className={Classnames(classes.formControl__radioField, {
          [classes.formControl__radioFieldError]: false,
        })}
      >
        {renderOptions()}
      </RadioGroup>
      <FormHelperText className={classes.formControl__formHelper}>
        {strErrorMessage}
      </FormHelperText>
    </FormControl>
  );
};

export default withStyles(style)(RadioFormControl);
