import { createStyles, Theme } from "@material-ui/core";
// import { blue } from "@material-ui/core/colors";

export type ClassesType = {
  characterContainer: string;
};

export const style = (theme: Theme) => {
  return createStyles({
    characterContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "80%",
      textAlign: "center",
    },
  });
};
