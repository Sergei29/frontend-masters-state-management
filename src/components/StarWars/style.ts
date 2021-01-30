import { createStyles, Theme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export type ClassesType = {
  starWars: string;
  charactersList: string;
  charactersItem: string;
};

export const style = (theme: Theme) => {
  return createStyles({
    starWars: {
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "80%",
    },
    charactersList: {
      display: "flex",
      flexDirection: "column",
      columnGap: theme.spacing(1),
      width: "30%",
    },
    charactersItem: {
      textDecoration: "none",
      color: theme.palette.primary.main,
      padding: theme.spacing(1),
      border: "1px solid transparent",
      "&:hover": {
        backgroundColor: blue[100],
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 4,
      },
      transition: `all 300ms ease-in`,
    },
  });
};
