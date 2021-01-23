import { createStyles, Theme } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";

export type ClassesType = {
  grudgeLIst__item_forgiven: string;
  grudgeLIst__item_notForgiven: string;
  grudgeLIst__item__switch: string;
};
export const style = (theme: Theme) =>
  createStyles({
    grudgeLIst__item_forgiven: {
      width: "30%",
      minWidth: 200,
      backgroundColor: green[300],
      margin: theme.spacing(1),
    },
    grudgeLIst__item_notForgiven: {
      width: "30%",
      minWidth: 200,
      backgroundColor: orange[300],
      margin: theme.spacing(1),
    },
    grudgeLIst__item__switch: {
      display: "flex",
      alignItems: "center",
      "& > p": {
        width: "60%",
      },
    },
  });
