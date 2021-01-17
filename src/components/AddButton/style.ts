import { createStyles, Theme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export type ClassesType = {
  add__callToAction: string;
};

export const style = (theme: Theme) =>
  createStyles({
    add__callToAction: {
      "& > span > svg": {
        fontSize: "3.5rem",
      },
      "&:hover": {
        color: red.A700,
      },
      color: red[500],
    },
  });
