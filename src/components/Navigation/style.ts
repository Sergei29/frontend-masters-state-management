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
      borderBottom: `3px solid ${red[500]}`,
      marginBottom: theme.spacing(2),
    },

    navigation__link: {
      "&.active": {
        fontWeight: 800,
      },
      display: "inline-block",
      margin: theme.spacing(1),
      textDecoration: "none",
      color: "#333",
    },
  });
