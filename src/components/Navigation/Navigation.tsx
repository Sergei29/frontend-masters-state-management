import React from "react";
import { NavLink } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};
const Navigation: React.FC<Props> = ({ classes }) => {
  return (
    <nav className={classes.navigation}>
      <NavLink to="/" exact className={classes.navigation__link}>
        GrudgeList Reducer
      </NavLink>
      <NavLink to="/counter-functional" className={classes.navigation__link}>
        Functional Counter
      </NavLink>
      <NavLink to="/counter-class" className={classes.navigation__link}>
        Class Counter
      </NavLink>
      <NavLink to="/pagination" className={classes.navigation__link}>
        Pagination
      </NavLink>
    </nav>
  );
};

export default withStyles(style)(Navigation);
