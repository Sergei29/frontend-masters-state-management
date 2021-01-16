import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  todoEditModal: string;
  form: string;
  form__inputField: string;
};

export const style = (theme: Theme) =>
  createStyles({
    todoEditModal: {
      padding: theme.spacing(2),
      width: "30%",
      margin: "0 auto",
      backgroundColor: green[100],
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    form__inputField: {
      marginBottom: theme.spacing(2),
      width: "100%",
    },
  });
