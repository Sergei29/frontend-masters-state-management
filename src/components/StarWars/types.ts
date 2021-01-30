import React from "react";

export enum Actions {
  FETCH_START = "FETCH_START",
  FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS",
  FETCH_BY_ID_SUCCESS = "FETCH_BY_ID_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
}

export type StateType = {
  arrResults: CharacterType[];
  objSelectedHero: Partial<CharacterDetailsType>;
  bLoading: boolean;
  strError: string;
};

export type CharacterType = {
  uid: string;
  name: string;
  url: string;
};

export const objLukeSkywalker = {
  birth_year: "19 BBY",
  eye_color: "Blue",
  films: ["https://www.swapi.tech/api/films/1/"],
  gender: "Male",
  hair_color: "Blond",
  height: "172",
  homeworld: "https://www.swapi.tech/api/planets/1/",
  mass: "77",
  name: "Luke Skywalker",
  skin_color: "Fair",
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-10T13:52:43.172000Z",
  species: ["https://www.swapi.tech/api/species/1/"],
  starships: ["https://www.swapi.tech/api/starships/12/"],
  url: "https://www.swapi.tech/api/people/1/",
  vehicles: ["https://www.swapi.tech/api/vehicles/14/"],
};

export type CharacterDetailsType = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export type ActionType = {
  type: Actions;
  payload?: string | Record<string, any> | Record<string, any>[];
};

export type ActionAsyncType = (
  dispatch: DispatchFnType,
  ...restArgs: any
) => Promise<void> | void;

export type DispatchFnType = React.Dispatch<ActionType>;
