import { createStyles, Theme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export type ClassesType = {
  starWars: string;
  charactersContainer: string;
  charactersList: string;
  charactersItem: string;
  charactersItemSelected: string;
  currentDetails: string;
};

export const style = (theme: Theme) => {
  const objSelectCss = {
    backgroundColor: blue[100],
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
  };
  return createStyles({
    starWars: {
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    charactersContainer: {
      display: "grid",
      gridTemplateColumns: "250px 1fr",
    },
    charactersList: {
      display: "flex",
      flexDirection: "column",
      columnGap: theme.spacing(1),
    },
    charactersItem: {
      textDecoration: "none",
      color: theme.palette.primary.main,
      padding: theme.spacing(1),
      border: "1px solid transparent",
      "&:hover": {
        ...objSelectCss,
      },
      transition: `all 300ms ease-in`,
    },

    charactersItemSelected: {
      textDecoration: "none",
      color: theme.palette.primary.main,
      padding: theme.spacing(1),
      ...objSelectCss,
    },

    currentDetails: {
      padding: theme.spacing(2),
    },
  });
};
