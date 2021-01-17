import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  root: string;
  todoSummary: string;
  todoSummary__actions: string;
};

export const style = (theme: Theme) =>
  createStyles({
    root: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: 250,
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    todoSummary: {
      "& > a": {
        color: "#333",
        textDecoration: "none",
      },
      borderRadius: "none",
      padding: theme.spacing(0.5),
      margin: theme.spacing(0.5),
      backgroundColor: green[100],
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
