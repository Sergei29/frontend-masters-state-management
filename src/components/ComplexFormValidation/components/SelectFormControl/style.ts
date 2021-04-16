import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  formControl: string;
  formControl__formHelper: string;
  formControl__selectField: string;
  formControl__selectFieldError: string;
};
export const style = (theme: Theme) =>
  createStyles({
    formControl: {},
    formControl__formHelper: {},
    formControl__selectField: {},
    formControl__selectFieldError: {},
  });
