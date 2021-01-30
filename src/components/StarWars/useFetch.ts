import { useState, useEffect } from "react";
import axios from "axios";

const SW_API = "https://www.swapi.tech/api/";

type CharacterType = {
  uid: string;
  name: string;
  url: string;
};

const useFetch = () => {
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

  return { arrCharachters, bLoading, strError };
};

export default useFetch;
