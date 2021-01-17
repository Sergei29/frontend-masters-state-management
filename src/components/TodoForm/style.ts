import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  todoForm: string;
  todoForm__form: string;
  todoForm__form__inputField: string;
};

export const style = (theme: Theme) =>
  createStyles({
    todoForm: {
      padding: theme.spacing(2),
      margin: "0 auto",
    },
    todoForm__form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    todoForm__form__inputField: {
      marginBottom: theme.spacing(2),
      width: "100%",
    },
  });
