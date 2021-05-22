import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBarContainer: {
      width: "80%",
      margin: "0 auto",
    },
    formControl_root: {
      marginTop: theme.spacing(2),
      width: "100%",
    },
  })
);
