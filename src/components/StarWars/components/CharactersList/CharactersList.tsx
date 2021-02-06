import React from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { CharacterType } from "../../types";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  bLoading: boolean;
  strError: string;
  arrCharacters: CharacterType[];
  strSelectedId: string;
  onCharacterClick: (id: string) => () => void;
};

const CharactersList = ({
  bLoading,
  classes,
  arrCharacters,
  strError,
  strSelectedId,
  onCharacterClick,
}: Props): JSX.Element => {
  if (arrCharacters.length === 0) {
    return <Typography variant="subtitle1">No characters</Typography>;
  }

  /**
   * @description fetched results renderer
   * @returns {JSX} markup
   */
  const renderList = () =>
    arrCharacters.length > 0 ? (
      arrCharacters.map(({ uid, name }) => (
        <Link
          key={uid}
          to={`/star-wars/${uid}`}
          className={
            strSelectedId === uid
              ? classes.charactersItemSelected
              : classes.charactersItem
          }
          onClick={onCharacterClick(uid)}
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
   * @description fetch characters error renderer
   * @returns {JSX} markup
   */
  const renderError = () => (
    <Typography variant="subtitle1">{strError}</Typography>
  );

  return (
    <div className={classes.charactersList}>
      {bLoading
        ? renderLoader()
        : strError.length > 0
        ? renderError()
        : renderList()}
    </div>
  );
};

export default withStyles(style)(CharactersList);
