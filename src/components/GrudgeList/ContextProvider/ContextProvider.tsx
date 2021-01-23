import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { ContextStateType } from "../types/types";
import {
  actionAddNewGrudge,
  actionDeleteGrudge,
  actionToggleForgive,
} from "./actions";

import reducer from "./reducer";
import { GrudgeType } from "../types/types";

const INITIAL_STATE = {
  grudges: [],
};

export const GrudgeContext = createContext<ContextStateType>(
  {} as ContextStateType
);

type Props = {
  children: React.ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { grudges: arrGrudges } = state;

  const submitGrudge = (objGrudge: Partial<GrudgeType>) => {
    const objNewGrudge = {
      ...objGrudge,
      id: uuidv4(),
      forgiven: false,
    } as GrudgeType;

    dispatch(actionAddNewGrudge(objNewGrudge));
  };

  const toggleForgive = (strId: string) => dispatch(actionToggleForgive(strId));

  const deleteGrudge = (strId: string) => dispatch(actionDeleteGrudge(strId));

  return (
    <GrudgeContext.Provider
      value={{ arrGrudges, submitGrudge, toggleForgive, deleteGrudge }}
    >
      {children}
    </GrudgeContext.Provider>
  );
};

export default ContextProvider;
