import { createStyles, Theme } from "@material-ui/core";

export type ClassesType = {
  grudgeLIst__list: string;
};
export const style = (theme: Theme) =>
  createStyles({
    grudgeLIst__list: {
      display: "flex",
    },
  });
