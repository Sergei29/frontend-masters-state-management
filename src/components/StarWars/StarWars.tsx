import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { reducer, INIT_STATE } from "./reducer";
import { actionFetchCharacters } from "./actions";
import useThunkReducer from "../../hooks/useThunkReducer";
import { StateType } from "./types";
//components:
import CharactersList from "./components/CharactersList";
import CharacterView from "./components/CharacterView";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};

/**
 * @description func component, star wars charcters fetched from api
 * @param {Object} {classes MUI classes}
 * @returns {JSX} markup, characters list
 */
const StarWars: React.FC<Props> = ({ classes }): JSX.Element => {
  /**
   * @description local state
   * @type {String} selected character's ID
   */
  const [strSelectedId, setSelectedId] = useState("");

  /**
   * @description getting context state and thunked dispatcher
   * @type {Object|Function} selected character's ID
   */
  const { state, dispatch } = useThunkReducer(reducer, INIT_STATE);

  const { arrResults, bLoading, strError } = state as StateType;

  /**
   * @description item click handler
   * @param {String} strId item iD
   * @returns {undefined} sets state
   */
  const handleItemClick = (strId: string) => () => setSelectedId(strId);

  /**
   * @description fetch characters on mount
   */
  useEffect(() => {
    dispatch(actionFetchCharacters());
  }, [dispatch]);

  return (
    <div className={classes.starWars}>
      <Typography variant="h4" align="center" color="primary">
        Star Wars Characters.
      </Typography>
      <div className={classes.charactersContainer}>
        <CharactersList
          arrCharacters={arrResults}
          bLoading={bLoading}
          strError={strError}
          onCharacterClick={handleItemClick}
          strSelectedId={strSelectedId}
        />
        <div className={classes.currentDetails}>
          {strSelectedId.length === 0 && bLoading === false && (
            <Typography align="center" color="primary">
              {" "}
              please, select a character
            </Typography>
          )}
          <Route path="/star-wars/:id" component={CharacterView} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(style)(StarWars);
