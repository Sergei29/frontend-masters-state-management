import { createStyles, Theme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export type ClassesType = {
  pagination: string;
  pagination__navButton: string;
  pagination__buttons: string;
};

export const style = (theme: Theme) =>
  createStyles({
    pagination: {
      display: "flex",
      justifyContent: "space-between",
      width: "80%",
    },
    pagination__navButton: {
      "&.active": { color: red[500] },
      display: "inline-block",
      textDecoration: "none",
      color: "#333",
      marginRight: theme.spacing(2),
      fontWeight: 800,
    },
    pagination__buttons: {
      display: "flex",
      justifyContent: "center",
      width: "70%",
    },
  });
