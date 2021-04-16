import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  formControl: string;
  formControl__formHelper: string;
  formControl__checkboxField: string;
  formControl__checkboxField__checkbox: string;
  formControl__checkboxFieldError: string;
};
export const style = (theme: Theme) =>
  createStyles({
    formControl: {},
    formControl__formHelper: {},
    formControl__checkboxField: {},
    formControl__checkboxField__checkbox: {},
    formControl__checkboxFieldError: {},
  });
