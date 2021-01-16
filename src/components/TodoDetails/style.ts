import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  todoDetails: string;
  todoDetails__actions: string;
};

export const style = (theme: Theme) =>
  createStyles({
    todoDetails: {
      padding: theme.spacing(0.5),
      margin: theme.spacing(0.5),
      backgroundColor: green[100],
      width: "40%",
    },
    todoDetails__actions: {
      display: "flex",
      justifyContent: "flex-end",
    },
  });
