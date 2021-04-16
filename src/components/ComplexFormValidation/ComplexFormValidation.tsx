import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import useForm from "./hooks/useForm";
import { ObjValidationType, FormStateType } from "./types/types";
//styles:
import { style, ClassesType } from "./style";

const ObjFormInitState: FormStateType = {
  name: {
    mixedValue: null,
    objValidation: { bIsValid: true, strErrorMessage: "" },
  },
  email: {
    mixedValue: null,
    objValidation: { bIsValid: true, strErrorMessage: "" },
  },
  mobile_number_uk: {
    mixedValue: null,
    objValidation: { bIsValid: true, strErrorMessage: "" },
  },
  skillset: {
    mixedValue: null,
    objValidation: { bIsValid: true, strErrorMessage: "" },
  },
  gender: {
    mixedValue: null,
    objValidation: { bIsValid: true, strErrorMessage: "" },
  },
  meal_preferences: {
    mixedValue: null,
    objValidation: { bIsValid: true, strErrorMessage: "" },
  },
};

type Props = {
  classes: ClassesType;
};
const ComplexFormValidation = ({ classes }: Props): JSX.Element => {
  const sendData = (objFormData: Record<string, any>) => {
    console.log("submit: ", objFormData);
  };

  const { objFormState, handleChange, handleBlur, handleSubmit } = useForm({
    objInitFormState: ObjFormInitState,
    funcSubmitCallback: sendData,
  });

  return (
    <Card component="form" onSubmit={handleSubmit}>
      <CardContent>
        <Typography></Typography>
      </CardContent>
      <CardActions>
        <Button type="submit" variant="outlined" color="primary">
          submit
        </Button>
        <Button type="reset">reset</Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(style)(ComplexFormValidation);
