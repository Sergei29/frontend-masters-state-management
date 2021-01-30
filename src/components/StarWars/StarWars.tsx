import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
//styles:
import { style, ClassesType } from "./style";

const SW_API = "https://www.swapi.tech/api/";

type CharacterType = {
  uid: string;
  name: string;
  url: string;
};

type Props = {
  classes: ClassesType;
};

const StarWars: React.FC<Props> = ({ classes }): JSX.Element => {
  const [arrCharachters, setArrCharachters] = useState<CharacterType[]>([]);
  const [bLoading, setBLoading] = useState<boolean>(false);
  const [strError, setStrError] = useState<string>("");

  /**
   * @description fetch SW Characters on mount.
   * @returns {undefined} sets local state wit hfetch results
   */
  useEffect(() => {
    let bWillUnmount = false;

    const funchGetchCharacters = async () => {
      setBLoading(true);
      try {
        const { data } = await axios.get(`${SW_API}/people/`);
        if (!bWillUnmount) {
          setBLoading(false);
          setStrError("");
          setArrCharachters(() => data.results);
        }
      } catch (error) {
        const strMessage = error.message
          ? error.message
          : "Failed to fetch Characters.";

        if (!bWillUnmount) {
          setBLoading(false);
          setStrError(strMessage);
        }
      }
    };

    funchGetchCharacters();

    //cleanup:
    return () => {
      bWillUnmount = true;
    };
  }, []);

  const renderList = () =>
    arrCharachters.length > 0 ? (
      arrCharachters.map(({ uid, name }) => (
        <Link
          key={uid}
          to={`/star-wars/${uid}`}
          className={classes.charactersItem}
        >
          {name}
        </Link>
      ))
    ) : (
      <Typography variant="subtitle1">No characters</Typography>
    );

  const renderLoader = () => (
    <Typography variant="subtitle1">Loading...</Typography>
  );

  const renderError = () => (
    <Typography variant="subtitle1">{strError}</Typography>
  );

  return (
    <div className={classes.starWars}>
      <Typography variant="h3" align="center">
        Star Wars Characters.
      </Typography>
      <div className={classes.charactersList}>
        {bLoading
          ? renderLoader()
          : strError.length > 0
          ? renderError()
          : renderList()}
      </div>
    </div>
  );
};

export default withStyles(style)(StarWars);
