import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  todoSummary: string;
  todoSummary__actions: string;
};

export const style = (theme: Theme) =>
  createStyles({
    todoSummary: {
      "& > a": {
        color: "#333",
        textDecoration: "none",
      },
      borderRadius: "none",
      padding: theme.spacing(0.5),
      margin: theme.spacing(0.5),
      backgroundColor: green[100],
      width: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    todoSummary__actions: {
      bottom: 0,
      display: "flex",
      justifyContent: "flex-end",
    },
  });
