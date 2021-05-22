import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    suggestionsList: {
      position: "relative",
      top: -20,
      backgroundColor: theme.palette.common.white,
      width: "99%",
      margin: "0 auto",
    },
    suggestionsList__item: {
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        borderRadius: 4,
      },
      cursor: "pointer",
    },
  })
);
