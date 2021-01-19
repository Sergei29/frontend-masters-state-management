import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  grudgeLIst__item: string;
  grudgeLIst__item__switch: string;
};
export const style = (theme: Theme) =>
  createStyles({
    grudgeLIst__item: {
      width: "30%",
      backgroundColor: green[300],
      margin: theme.spacing(1),
    },
    grudgeLIst__item__switch: {
      display: "flex",
      alignItems: "center",
      "& > p": {
        width: "30%",
      },
    },
  });
