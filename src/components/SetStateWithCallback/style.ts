import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  container: string;
};

export const style = (theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  });
