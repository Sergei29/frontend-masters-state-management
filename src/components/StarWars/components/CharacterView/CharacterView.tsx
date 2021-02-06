import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { actionFetchById } from "../../actions";
import { reducer, INIT_STATE } from "../../reducer";
import useThunkReducer from "../../../../hooks/useThunkReducer";
//styles:
import { style, ClassesType } from "./style";

type ParamsType = { id: string };

type Props = {
  classes: ClassesType;
} & RouteComponentProps<ParamsType>;

const CharacterView = ({ classes, match }: Props): JSX.Element => {
  const { state, dispatch } = useThunkReducer(reducer, INIT_STATE);

  const { bLoading, strError, objSelectedHero } = state;
  const { id } = match.params;

  useEffect(() => {
    dispatch(actionFetchById(id));
  }, [id, dispatch]);

  if (bLoading) {
    return <Typography align="center">Loading...</Typography>;
  }

  if (strError.length > 0) {
    return <Typography align="center">Error: {strError}</Typography>;
  }

  return (
    <div className={classes.characterContainer}>
      <Typography variant="h5">{objSelectedHero.name}</Typography>
      <Typography>Birth year: {objSelectedHero.birth_year}</Typography>
      <Typography>Height: {objSelectedHero.height}</Typography>
    </div>
  );
};

export default withStyles(style)(CharacterView);
