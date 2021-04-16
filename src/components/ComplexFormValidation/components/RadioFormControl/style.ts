import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  formControl: string;
  formControl__formHelper: string;
  formControl__radioField: string;
  formControl__radioField__radio: string;
  formControl__radioFieldError: string;
};
export const style = (theme: Theme) =>
  createStyles({
    formControl: {},
    formControl__formHelper: {},
    formControl__radioField: {},
    formControl__radioField__radio: {},
    formControl__radioFieldError: {},
  });
