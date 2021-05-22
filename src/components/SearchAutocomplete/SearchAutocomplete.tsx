import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TextField, FormControl } from "@material-ui/core";
// components:
import SuggestionsList from "./components/SuggestionsList";
// styles:
import { useStyles } from "./style";

const STR_API_URL = "https://reqres.in/api";

const SearchAutocomplete: React.FC = () => {
  const classes = useStyles();
  const statusRef = useRef({ willUnmount: false });
  const [arrUsers, setArrUsers] = useState<Record<string, any>[]>([]);
  const [arrSuggestions, setArrSuggestions] = useState<string[]>([]);
  const [strSearchText, setStrSearchText] = useState<string>("");

  const handleChangeText = (objEvent: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = objEvent.target;
    let arrMatchingUsers: string[] = [];

    if (value.length > 2) {
      arrMatchingUsers = arrUsers
        .filter((objUser) => {
          const regex = new RegExp(`${value}`, "gi");
          return objUser.email.match(regex);
        })
        .map((objUser) => objUser.email);
    }

    setArrSuggestions(arrMatchingUsers);
    setStrSearchText(value);
  };

  const handleClickSuggest = (strValue: string) => {
    setStrSearchText(strValue);
    setArrSuggestions([]);
  };

  useEffect(() => {
    const objCurrentStatus = statusRef.current;

    const funcLoadUsers = async () => {
      try {
        const { data } = await axios.get(`${STR_API_URL}/users`);
        if (!objCurrentStatus.willUnmount) {
          setArrUsers(data.data);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    };

    funcLoadUsers();

    return () => {
      objCurrentStatus.willUnmount = true;
    };
  }, []);

  return (
    <div className={classes.searchBarContainer}>
      <FormControl classes={{ root: classes.formControl_root }}>
        <TextField
          variant="outlined"
          onChange={handleChangeText}
          value={strSearchText}
        />
        {arrSuggestions.length > 0 && (
          <SuggestionsList
            arrSuggestions={arrSuggestions}
            handleItemClick={handleClickSuggest}
          />
        )}
      </FormControl>
    </div>
  );
};

export default SearchAutocomplete;
