export enum ActionName {
  MERGE_STATE = "MERGE_STATE",
}

export type FormStateType = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  investmentInterest: string;
};

export type PayloadType = FormStateType;

export type ActionType = {
  type: ActionName;
  payload?: PayloadType;
};

export type ActionCreatorType = (...args: any) => ActionType;

export type ReducerType = (
  objState: FormStateType,
  objAction: ActionType
) => FormStateType;

export type ContextStateType = {
  objState: FormStateType;
  setObjState: (objState: FormStateType) => void;
};
