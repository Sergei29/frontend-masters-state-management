import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  children: React.ReactNode;
};

/**
 * @description functional component, main content container
 * @param {Object} props component props
 * @returns {JSX} component markup
 */
const Main = ({ classes, children }: Props): JSX.Element => {
  return <div className={classes.App_Main}>{children}</div>;
};

export default withStyles(style)(Main);
