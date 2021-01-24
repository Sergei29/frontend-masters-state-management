import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  form: string;
  form__input: string;
  form__button: string;
};
export const style = (theme: Theme) =>
  createStyles({
    form: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
    },
    form__input: {
      marginRight: theme.spacing(1),
      display: "inline-block",
      height: "100%",
      "&>div": {
        height: "inherit",
      },
    },
    form__button: {
      "&:hover": {
        backgroundColor: green[600],
      },
      "&:active": {
        backgroundColor: green[600],
      },
      backgroundColor: green[300],
    },
  });
