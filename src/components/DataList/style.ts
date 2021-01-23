import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  dataList: string;
  dataList__form: string;
};

export const style = (theme: Theme) =>
  createStyles({
    dataList: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
    },

    dataList__form: {},
  });
