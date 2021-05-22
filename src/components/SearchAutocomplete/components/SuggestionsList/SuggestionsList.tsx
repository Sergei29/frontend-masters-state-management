import React from "react";
import { List, ListItem } from "@material-ui/core";
// styles:
import { useStyles } from "./style";

type Props = {
  arrSuggestions: string[];
  handleItemClick: (strValue: string) => void;
};

const SuggestionsList: React.FC<Props> = ({
  arrSuggestions,
  handleItemClick,
}) => {
  const classes = useStyles();
  return (
    <List className={classes.suggestionsList}>
      {arrSuggestions.map((strSuggestion) => (
        <ListItem
          key={strSuggestion}
          className={classes.suggestionsList__item}
          onClick={() => handleItemClick(strSuggestion)}
        >
          {strSuggestion}
        </ListItem>
      ))}
    </List>
  );
};

export default SuggestionsList;
