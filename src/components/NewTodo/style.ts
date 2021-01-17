import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  newTodo: string;
};

export const style = (theme: Theme) =>
  createStyles({
    newTodo: {
      padding: theme.spacing(2),
      width: "30%",
      backgroundColor: green[100],
    },
  });
