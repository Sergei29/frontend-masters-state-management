import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  formControl: string;
  formControl__formHelper: string;
  formControl__textField: string;
  formControl__textFieldError: string;
};
export const style = (theme: Theme) =>
  createStyles({
    formControl: {},
    formControl__formHelper: {},
    formControl__textField: {},
    formControl__textFieldError: {},
  });
