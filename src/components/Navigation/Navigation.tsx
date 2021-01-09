import React from "react";
import { NavLink } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { arrNavLinks } from "./navLinks";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};
const Navigation: React.FC<Props> = ({ classes }) => {
  return (
    <nav className={classes.navigation}>
      {arrNavLinks.map(({ id, name, path, exact }) => (
        <NavLink
          key={id}
          to={path}
          exact={exact}
          className={classes.navigation__link}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default withStyles(style)(Navigation);
