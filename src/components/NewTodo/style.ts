import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  newTodo: string;
  newTodo__form: string;
  newTodo__form__inputField: string;
};

export const style = (theme: Theme) =>
  createStyles({
    newTodo: {
      padding: theme.spacing(2),
      width: "30%",
      margin: "0 auto",
      backgroundColor: green[100],
    },
    newTodo__form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    newTodo__form__inputField: {
      marginBottom: theme.spacing(2),
      width: "100%",
    },
  });
