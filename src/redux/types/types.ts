import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export type RootStateType = {
  todo: StateType;
  nasa: StateType;
};

export type StateType = {
  data: null | string | Record<string, any>[] | Record<string, any>;
  loading: boolean;
  error: null | string;
};

export type ActionType = {
  type: string;
  payload?: null | string | Record<string, any>[] | Record<string, any>;
};

export type ActionCreatorType = (...args: any) => ActionType;

export type ThunkActionCreatorType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>;
