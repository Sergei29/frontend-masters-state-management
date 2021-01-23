import { GrudgeType, ActionName, ActionType } from "../types/types";

const { ADD_GRUDGE, DELETE_GRUDGE, TOGGLE_FORGIVE_GRUDGE } = ActionName;

type StateType = {
  grudges: GrudgeType[];
};

type ReducerType = (objState: StateType, objAction: ActionType) => StateType;

const reducer: ReducerType = (objState, objAction) => {
  switch (objAction.type) {
    case ADD_GRUDGE:
      return {
        ...objState,
        grudges: [objAction.payload as GrudgeType, ...objState.grudges],
      };

    case DELETE_GRUDGE:
      return {
        ...objState,
        grudges: objState.grudges.filter(
          (objGrudge) => objGrudge.id !== objAction.payload
        ),
      };
    case TOGGLE_FORGIVE_GRUDGE:
      return {
        ...objState,
        grudges: objState.grudges.map((objGrudge) => {
          if (objGrudge.id === objAction.payload) {
            return {
              ...objGrudge,
              forgiven: !objGrudge.forgiven,
            };
          }
          return objGrudge;
        }),
      };
    default:
      return objState;
  }
};

export default reducer;
