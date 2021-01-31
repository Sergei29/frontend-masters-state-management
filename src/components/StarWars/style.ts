import { createStyles, Theme } from "@material-ui/core";

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
        textDecoration: "underline",
      },
      transition: `all 300ms ease-in`,
    },

    charactersItemSelected: {
      ...objSelectCss,
      textDecoration: "none",
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      padding: theme.spacing(1),
      transition: `all 300ms ease-in`,
    },

    currentDetails: {
      padding: theme.spacing(2),
    },
  });
};
