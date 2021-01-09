import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  todoList: string;
  todoList__todoItem: string;
};

export const style = (theme: Theme) =>
  createStyles({
    todoList: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    todoList__todoItem: {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
    },
  });
