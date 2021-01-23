import { createStyles, Theme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export type ClassesType = {
  navigation: string;
  navigation__link: string;
};

export const style = (theme: Theme) =>
  createStyles({
    navigation: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(4),
    },
    navigation__link: {
      "&.active": { color: red[500] },
      display: "inline-block",
      textDecoration: "none",
      color: "#333",
      marginRight: theme.spacing(2),
      fontWeight: 800,
    },
  });
