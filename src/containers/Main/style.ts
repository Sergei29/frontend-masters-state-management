import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  App_Main: string;
};
export const style = (theme: Theme) =>
  createStyles({
    App_Main: {
      marginTop: theme.spacing(4),
      paddingTop: theme.spacing(4),
    },
  });
