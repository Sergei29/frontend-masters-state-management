import { createStyles, Theme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export type ClassesType = {
  todoList: string;
  todoList__todoItem: string;
  todoList__callToAction: string;
};

export const style = (theme: Theme) =>
  createStyles({
    todoList: {
      display: "flex",
      justifyContent: "center",
    },

    todoList__todoItem: {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
    },

    todoList__callToAction: {
      "&:hover": {
        backgroundColor: red.A700,
      },
      backgroundColor: red[500],
    },
  });
