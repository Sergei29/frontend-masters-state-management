import { useReducer } from "react";

type ActionType = { type: string; payload?: any };

type ReducerType = (
  objState: any, //Record<string, any>,
  objAction: any // Record<string, any>
) => Record<string, any>;

type UseLoggedReducerType = (
  reducer: ReducerType,
  initialState: Record<string, any>
) => {
  state: Record<string, any>;
  loggedDispatch: (objAction: ActionType) => void;
};

const logAction = (objAction: Record<string, any>) => {
  console.log("%Type: ", "background: #222; color: #bada55", objAction.type);
  objAction.payload &&
    console.log(
      "%Payload: ",
      "color: yellow; background-color: blue;padding: 2px",
      objAction.payload
    );
};

export const useLoggedReducer: UseLoggedReducerType = (
  reducer,
  initialState
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loggedDispatch = (objAction: ActionType) => {
    logAction(objAction);
    return dispatch(objAction);
  };

  return { state, loggedDispatch };
};
