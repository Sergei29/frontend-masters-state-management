import { ActionType, StateType } from "../../types/types";
import { todoActionType } from "../../actions/todo/actions.types";

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

/**
 * @description todo reducer
 * @param {Object} state todo state
 * @param {Object} action action fired
 * @returns {Object} todo state
 */
export const todoReducer = (
  state: StateType = INITIAL_STATE,
  action: ActionType
): StateType => {
  switch (action.type) {
    case todoActionType.FETCH_TODO_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case todoActionType.FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload!,
      };
    case todoActionType.FETCH_TODO_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      };
    default:
      return state;
  }
};
