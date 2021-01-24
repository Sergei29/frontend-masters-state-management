import { createStyles } from "@material-ui/core";

export type ClassesType = {
  grudgeLIst__list: string;
};
export const style = () =>
  createStyles({
    grudgeLIst__list: {
      display: "flex",
      flexWrap: "wrap",
    },
  });
