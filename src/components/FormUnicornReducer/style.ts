import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  form: string;
  formContent: string;
  formContent__item: string;
  formActions: string;
  formActions__button: string;
};
export const style = (theme: Theme) =>
  createStyles({
    form: {
      maxWidth: 500,
      margin: `${theme.spacing(2)}px auto`,
    },
    formContent: {
      display: "flex",
      flexDirection: "column",
      rowGap: `${theme.spacing(2)}px`,
    },
    formContent__item: {},
    formActions: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
    formActions__button: {},
  });
