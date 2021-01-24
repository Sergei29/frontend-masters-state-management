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
} from "./actions";
import reducer from "./reducer";
import getStateFromLocalStorage from "../../../utils/getStateFromLocalStorage";
import { GrudgeType, ContextStateType } from "../types/types";

const INITIAL_STATE = {
  grudges: [],
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
  const [state, dispatch] = useReducer(
    reducer,
    getStateFromLocalStorage("state") || INITIAL_STATE
  );

  /**
   * @description on change - saves state to local storage
   */
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const { grudges: arrGrudges } = state;

  /**
   * @description submit form callback
   * @param {Object} objGrudge form data - new grudge
   * @returns {undefined} fires an action
   */
  const submitGrudge = useCallback((objGrudge: Partial<GrudgeType>) => {
    const objNewGrudge = {
      ...objGrudge,
      id: uuidv4(),
      forgiven: false,
    } as GrudgeType;

    dispatch(actionAddNewGrudge(objNewGrudge));
  }, []);

  /**
   * @description on switch click callback
   * @param {String} strId item id to update the property - forgiven
   * @returns {undefined} fires an action
   */
  const toggleForgive = useCallback(
    (strId: string) => dispatch(actionToggleForgive(strId)),
    []
  );

  /**
   * @description on delete callback
   * @param {String} strId item id to delete
   * @returns {undefined} fires an action
   */
  const deleteGrudge = useCallback(
    (strId: string) => dispatch(actionDeleteGrudge(strId)),
    []
  );

  return (
    <GrudgeContext.Provider
      value={{ arrGrudges, submitGrudge, toggleForgive, deleteGrudge }}
    >
      {children}
    </GrudgeContext.Provider>
  );
};

export default ContextProvider;
