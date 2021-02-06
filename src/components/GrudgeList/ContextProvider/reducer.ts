import { GrudgeType, ActionName, ActionType, StateType } from "../types/types";

const {
  ADD_GRUDGE,
  DELETE_GRUDGE,
  TOGGLE_FORGIVE_GRUDGE,
  UNDO_THE_LAST,
  REDO_THE_LAST,
} = ActionName;

const INITIAL_STATE: StateType = {
  past: [],
  present: { grudges: [] },
  future: [],
};

type ReducerType = (objState: StateType, objAction: ActionType) => StateType;

const reducer: ReducerType = (objState = INITIAL_STATE, objAction) => {
  switch (objAction.type) {
    case ADD_GRUDGE:
      const objNewPresent = {
        grudges: [objAction.payload as GrudgeType, ...objState.present.grudges],
      };

      return {
        past: [objState.present, ...objState.past],
        present: objNewPresent,
        future: [],
      };

    case DELETE_GRUDGE:
      const objUpdatedPresent = {
        grudges: objState.present.grudges.filter(
          (objGrudge) => objGrudge.id !== objAction.payload
        ),
      };

      return {
        past: [objState.present, ...objState.past],
        present: objUpdatedPresent,
        future: [],
      };

    case TOGGLE_FORGIVE_GRUDGE:
      const objPresentUpdated = {
        grudges: objState.present.grudges.map((objGrudge) => {
          if (objGrudge.id === objAction.payload) {
            return {
              ...objGrudge,
              forgiven: !objGrudge.forgiven,
            };
          }
          return objGrudge;
        }),
      };

      return {
        past: [objState.present, ...objState.past],
        present: objPresentUpdated,
        future: [],
      };

    case UNDO_THE_LAST:
      const [objLastPast, ...arrRestOfPast] = objState.past;
      const arrNewPast = objState.past.length > 0 ? [...arrRestOfPast] : [];
      const objPresentUndone =
        objState.past.length > 0 ? objLastPast : objState.present;

      return {
        past: arrNewPast,
        present: objPresentUndone,
        future: [objState.present, ...objState.future],
      };

    case REDO_THE_LAST:
      const [objLastFuture, ...arrRestOfFuture] = objState.future;
      const arrNewFuture =
        objState.future.length > 0 ? [...arrRestOfFuture] : [];
      const objPresentRedone =
        objState.future.length > 0 ? objLastFuture : objState.present;

      return {
        past: [objState.present, ...objState.past],
        present: objPresentRedone,
        future: arrNewFuture,
      };
    default:
      return objState;
  }
};

export default reducer;
