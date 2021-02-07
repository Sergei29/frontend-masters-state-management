import { useReducer, useCallback } from "react";
import {
  FormStateType,
  ActionType,
  ReducerType,
  ActionName,
  ContextStateType,
} from "./types/types";

/**
 * @description reducer function
 * @param {Object} objPrevState form state
 * @param {Object} objAction action type
 * @returns {Object} new form state
 */
const reducer: ReducerType = (
  objPrevState: FormStateType,
  objAction: ActionType
) => {
  switch (objAction.type) {
    default:
      return {
        ...objPrevState,
        ...objAction.payload,
      };
  }
};

/**
 * @description custom hook, form state management
 * @param {Object} objIntitialState initial form state
 * @returns {Object} form state and set state function
 */
const useForm = (objIntitialState: FormStateType): ContextStateType => {
  const [objState, dispatch] = useReducer(reducer, objIntitialState);

  /**
   * @description update state function
   * @param {Object} objNewState new form state
   * @returns {undefined} dispatches an action to update state
   */
  const setObjState = useCallback(
    (objNewState: FormStateType) =>
      dispatch({ type: ActionName.MERGE_STATE, payload: objNewState }),
    [dispatch]
  );

  return { objState, setObjState };
};

export default useForm;
