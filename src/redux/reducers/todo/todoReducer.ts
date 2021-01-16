import { ActionType, TodoStateType } from "../../types/types";
import { todoActionType } from "../../actions/todo/actions.types";

const INITIAL_STATE = {
  data: [],
  current: {},
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
  state: TodoStateType = INITIAL_STATE,
  action: ActionType
): TodoStateType => {
  switch (action.type) {
    case todoActionType.CREATE_TODO_START:
    case todoActionType.DELETE_TODO_START:
    case todoActionType.UPDATE_TODO_START:
    case todoActionType.FETCH_TODO_LIST_START:
    case todoActionType.FETCH_TODO_BY_ID_START:
      return {
        ...state,
        loading: true,
      };

    case todoActionType.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload as Record<string, any>],
      };

    case todoActionType.FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload as Record<string, any>[],
      };

    case todoActionType.FETCH_TODO_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        current: action.payload as Record<string, any>,
      };

    case todoActionType.UPDATE_TODO_SUCCESS:
      return action.payload as TodoStateType;

    case todoActionType.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload as Record<string, any>[],
      };

    case todoActionType.CREATE_TODO_ERROR:
    case todoActionType.DELETE_TODO_ERROR:
    case todoActionType.UPDATE_TODO_ERROR:
    case todoActionType.FETCH_TODO_LIST_ERROR:
    case todoActionType.FETCH_TODO_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      };

    default:
      return state;
  }
};
