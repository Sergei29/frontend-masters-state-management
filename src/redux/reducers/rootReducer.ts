import { combineReducers } from "redux";
import { todoReducer } from "./todo/todoReducer";
import { nasaReducer } from "./nasa/nasaReducer";
import { RootStateType } from "../types/types";

export const rootReducer = combineReducers<RootStateType>({
  todo: todoReducer,
  nasa: nasaReducer,
});
