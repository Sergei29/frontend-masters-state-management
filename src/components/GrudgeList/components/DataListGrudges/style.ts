import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  dataList: string;
  dataList__contnent: string;
};

export const style = (theme: Theme) =>
  createStyles({
    dataList: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    dataList__contnent: {
      width: 200,
    },
  });
