import { createStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export type ClassesType = {
  grudgeLIst__list: string;
  grudgeLIst__list__heading: string;
};
export const style = (theme: Theme) =>
  createStyles({
    grudgeLIst__list: {
      display: "flex",
    },
    grudgeLIst__list__heading: {
      color: green.A700,
      fontWeight: 800,
    },
  });
