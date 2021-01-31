export type EnhancedDispatchType = React.Dispatch<Thunk | ActionType>;
export type ActionType = {
  type: string;
  payload?: string | Record<string, any> | Record<string, any>[];
};
export type StateType = Record<string, any>;
export type Thunk = (dispatch: React.Dispatch<ActionType>) => void;
export type ReducerType = (
  objState: any,
  mixedAction: any
) => Record<string, any>;
