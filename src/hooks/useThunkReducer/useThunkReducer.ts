import { useReducer, useCallback } from "react";
import { isFunction } from "lodash";
import { ReducerType, StateType, Thunk, ActionType } from "./types";

/**
 * @description custom hook, thunked dispatch
 * @param {Function} reducer Reducer function
 * @param {Object} initialState initial state
 * @returns {Object} reducer state with enhanced dispatch
 */
const useThunkReducer = (reducer: ReducerType, initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * @description enhanced, thunked dispatch
   * @param {(Function | Object)} mixedAction Action object OR fetch function
   * @returns {undefined} calls action or dispatching the action
   */
  const enhancedDispatch = useCallback((mixedAction: Thunk | ActionType) => {
    if (isFunction(mixedAction)) {
      mixedAction(dispatch);
    } else {
      dispatch(mixedAction);
    }
  }, []); // doesn't need 'dispatch' in dependency array as 'dispatch' is a non-reactive function provided by react.

  return { state, dispatch: enhancedDispatch };
};

export default useThunkReducer;
