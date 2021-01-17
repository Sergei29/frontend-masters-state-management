import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  todoEditModal: string;
};

export const style = (theme: Theme) =>
  createStyles({
    todoEditModal: {
      padding: theme.spacing(2),
      width: "30%",
      margin: "0 auto",
      backgroundColor: green[100],
    },
  });
