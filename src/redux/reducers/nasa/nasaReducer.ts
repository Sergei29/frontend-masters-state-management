import { ActionType, NasaStateType } from "../../types/types";

const INITIAL_STATE = {};

export const nasaReducer = (
  state = INITIAL_STATE,
  action: ActionType
): NasaStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
