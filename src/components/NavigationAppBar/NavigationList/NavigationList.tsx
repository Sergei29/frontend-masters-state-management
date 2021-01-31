import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import navLinks from "../navLinks";

const useStyles = makeStyles((theme: Theme) => ({
  navLink: {
    "&.active": { color: theme.palette.secondary.main },
    textDecoration: "none",
    fontWeight: 800,
    color: theme.palette.primary.main,
  },
}));

type Props = {
  onItemClick: () => void;
};
const NavigationList = ({ onItemClick }: Props) => {
  const classes = useStyles();
  return (
    <List>
      {navLinks.map(({ id, name, path, exact }) => (
        <ListItem component="div" key={id}>
          <NavLink
            to={path}
            exact={exact}
            className={classes.navLink}
            onClick={onItemClick}
          >
            {name}
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
