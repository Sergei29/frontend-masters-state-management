import React, { useReducer, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { reducer, INIT_STATE } from "./reducer";
import { actionFetchCharacters } from "./actions";
//components:
import CharacterDetails from "./components/CharacterDetails";
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
  const [strSelectedId, setSelectedId] = useState("");
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const { arrResults, bLoading, strError } = state;

  /**
   * @description item click handler
   * @param {String} strId item iD
   * @returns {undefined} sets state
   */
  const handleItemClick = (strId: string) => () => setSelectedId(strId);

  /**
   * @description fetched results renderer
   * @returns {JSX} markup
   */
  const renderList = () =>
    arrResults.length > 0 ? (
      arrResults.map(({ uid, name }) => (
        <Link
          key={uid}
          to={`/star-wars/${uid}`}
          className={
            strSelectedId === uid
              ? classes.charactersItemSelected
              : classes.charactersItem
          }
          onClick={handleItemClick(uid)}
        >
          {name}
        </Link>
      ))
    ) : (
      <Typography variant="subtitle1">No characters</Typography>
    );

  /**
   * @description loader renderer
   * @returns {JSX} markup
   */
  const renderLoader = () => (
    <Typography variant="subtitle1">Loading...</Typography>
  );

  /**
   * @description fetch error renderer
   * @returns {JSX} markup
   */
  const renderError = () => (
    <Typography variant="subtitle1">{strError}</Typography>
  );

  useEffect(() => {
    actionFetchCharacters(dispatch);
  }, [dispatch]);

  return (
    <div className={classes.starWars}>
      <Typography variant="h4" align="center" color="primary">
        Star Wars Characters.
      </Typography>
      <div className={classes.charactersContainer}>
        <div className={classes.charactersList}>
          {bLoading
            ? renderLoader()
            : strError.length > 0
            ? renderError()
            : renderList()}
        </div>
        <div className={classes.currentDetails}>
          {strSelectedId.length === 0 && (
            <Typography align="center"> please, select a character</Typography>
          )}
          <Route path="/star-wars/:id" component={CharacterDetails} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(style)(StarWars);
