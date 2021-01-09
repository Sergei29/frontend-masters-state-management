import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  navigation: string;
  navigation__link: string;
};

export const style = (theme: Theme) =>
  createStyles({
    navigation: {
      display: "flex",
      justifyContent: "center",
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
