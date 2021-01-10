export type RootStateType = {
  todo: StateType;
  nasa: StateType;
};

export type StateType = {
  data: null | any[] | Record<string, any>;
  loading: boolean;
  error: null | string;
};

export type ActionType = {
  type: string;
  payload?: null | any[] | Record<string, any>;
};

export type ActionCreatorType = (...args: any) => ActionType;
