import { createStyles, Theme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export type ClassesType = {
  pagination: string;
  pagination__navButton: string;
  pagination__buttons: string;
  pagination__spill: string;
  pagination__pageButton: string;
  pagination__pageButton_active: string;
};

export const style = (theme: Theme) => {
  const buttonStyle = {
    "&:focus": {
      backgroundColor: red[600],
    },
    "&:active": {
      backgroundColor: red[600],
    },
    minWidth: "unset",
    width: 35,
    height: 35,
    margin: theme.spacing(0.5),
  };

  return createStyles({
    pagination: {
      marginTop: theme.spacing(3),
      display: "flex",
      justifyContent: "center",
      width: "80%",
    },
    pagination__navButton: {
      ...buttonStyle,
      padding: 0,
      display: "inline-block",
      textDecoration: "none",
      color: "#333",
      fontWeight: 800,
    },
    pagination__buttons: {
      display: "flex",
      justifyContent: "center",
      width: "50%",
    },

    pagination__pageButton: {
      ...buttonStyle,
    },
    pagination__pageButton_active: {
      ...buttonStyle,
      backgroundColor: red[500],
    },
    pagination__spill: {
      display: "flex",
      alignItems: "flex-end",
    },
  });
};
