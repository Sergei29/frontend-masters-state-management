import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  todoSummary: string;
};

export const style = (theme: Theme) =>
  createStyles({
    todoSummary: {
      "& > a": {
        color: "#333",
        textDecoration: "none",
      },
      padding: theme.spacing(0.5),
      margin: theme.spacing(0.5),
      backgroundColor: green[100],
      width: "40%",
    },
  });
