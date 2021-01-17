import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  paper__root__noBoxShadow: string;
  todoList: string;
  todoList__todoItem: string;
  todoList__callToAction: string;
};

export const style = (theme: Theme) =>
  createStyles({
    paper__root__noBoxShadow: {
      boxShadow: "none",
    },
    todoList: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },

    todoList__todoItem: {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
    },

    todoList__callToAction: {
      display: "flex",
      justifyContent: "center",
    },
  });
