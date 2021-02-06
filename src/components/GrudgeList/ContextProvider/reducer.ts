import { GrudgeType, ActionName, ReducerType } from "../types/types";
import { INITIAL_STATE } from "./initialState";

const {
  ADD_GRUDGE,
  DELETE_GRUDGE,
  TOGGLE_FORGIVE_GRUDGE,
  UNDO_THE_LAST,
  REDO_THE_LAST,
  RESET_STATE,
} = ActionName;

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
      if (objState.past.length === 0) return objState;
      const [objMostRecentPast, ...arrRestOfPast] = objState.past;

      return {
        past: arrRestOfPast,
        present: objMostRecentPast,
        future: [objState.present, ...objState.future],
      };

    case REDO_THE_LAST:
      if (objState.future.length === 0) return objState;
      const [objMostRecentFuture, ...arrRestOfFuture] = objState.future;

      return {
        past: [objState.present, ...objState.past],
        present: objMostRecentFuture,
        future: arrRestOfFuture,
      };
    case RESET_STATE:
      return { ...INITIAL_STATE };
    default:
      return objState;
  }
};

export default reducer;
