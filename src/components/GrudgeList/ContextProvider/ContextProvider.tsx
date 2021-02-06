import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";
import {
  actionAddNewGrudge,
  actionDeleteGrudge,
  actionToggleForgive,
  actionUndoTheLast,
  actionRedoTheLast,
} from "./actions";
import reducer from "./reducer";
import getStateFromLocalStorage from "../../../utils/getStateFromLocalStorage";
import { GrudgeType, ContextStateType, StateType } from "../types/types";

const INITIAL_STATE: StateType = {
  past: [],
  present: { grudges: [] },
  future: [],
};

export const GrudgeContext = createContext<ContextStateType>(
  {} as ContextStateType
);

type Props = {
  children: React.ReactNode;
};

/**
 * @description HOC Context provider
 * @param {Node} {children React Components}
 * @returns {JSX} React Components with state provided
 */
const ContextProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [objState, dispatch] = useReducer(
    reducer,
    getStateFromLocalStorage("objState") || INITIAL_STATE
  );

  /**
   * @description on change - saves state to local storage
   */
  useEffect(() => {
    localStorage.setItem("objState", JSON.stringify(objState));
  }, [objState]);

  /**
   * @description submit form callback
   * @param {Object} objGrudge form data - new grudge
   * @returns {undefined} fires an action
   */
  const submitGrudge = useCallback(
    (objGrudge: Partial<GrudgeType>) => {
      const objNewGrudge = {
        ...objGrudge,
        id: uuidv4(),
        forgiven: false,
      } as GrudgeType;

      dispatch(actionAddNewGrudge(objNewGrudge));
    },
    [dispatch]
  );

  /**
   * @description on switch click callback
   * @param {String} strId item id to update the property - forgiven
   * @returns {undefined} fires an action
   */
  const toggleForgive = useCallback(
    (strId: string) => dispatch(actionToggleForgive(strId)),
    [dispatch]
  );

  /**
   * @description on delete callback
   * @param {String} strId item id to delete
   * @returns {undefined} fires an action
   */
  const deleteGrudge = useCallback(
    (strId: string) => dispatch(actionDeleteGrudge(strId)),
    [dispatch]
  );

  /**
   * @description undo the last operation
   * @returns {undefined} fires an action
   */
  const undoTheLast = useCallback(() => {
    dispatch(actionUndoTheLast());
  }, [dispatch]);

  /**
   * @description redo the last operation
   * @returns {undefined} fires an action
   */
  const redoTheLast = useCallback(() => {
    dispatch(actionRedoTheLast());
  }, [dispatch]);

  return (
    <GrudgeContext.Provider
      value={{
        objState,
        submitGrudge,
        toggleForgive,
        deleteGrudge,
        undoTheLast,
        redoTheLast,
      }}
    >
      {children}
    </GrudgeContext.Provider>
  );
};

export default ContextProvider;
