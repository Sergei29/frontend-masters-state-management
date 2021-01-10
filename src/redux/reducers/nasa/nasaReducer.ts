import { ActionType, StateType } from "../../types/types";

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

export const nasaReducer = (
  state: StateType = INITIAL_STATE,
  action: ActionType
) => {
  switch (action.type) {
    default:
      return state;
  }
};
