export enum ActionName {
  ADD_GRUDGE = "ADD_GRUDGE",
  TOGGLE_FORGIVE_GRUDGE = "TOGGLE_FORGIVE_GRUDGE",
  DELETE_GRUDGE = "DELETE_GRUDGE",
  UPDATE_GRUDGE = "UPDATE_GRUDGE",
  UNDO_THE_LAST = "UNDO_THE_LAST",
  REDO_THE_LAST = "REDO_THE_LAST",
}

export type GrudgeType = {
  person: string;
  reason: string;
  id: string;
  forgiven: boolean;
};

export type PayloadType =
  | string
  | boolean
  | GrudgeType
  | Record<string, string | GrudgeType>;

export type ActionType = {
  type: ActionName;
  payload?: PayloadType;
};

export type ActionCreatorType = (
  arg: string | boolean | GrudgeType,
  strId?: string
) => ActionType;

export type StateType = {
  past: { grudges: GrudgeType[] }[];
  present: { grudges: GrudgeType[] };
  future: { grudges: GrudgeType[] }[];
};

export type ContextStateType = {
  objState: StateType;
  submitGrudge: (objGrudge: Partial<GrudgeType>) => void;
  toggleForgive: (strId: string) => void;
  deleteGrudge: (strId: string) => void;
  undoTheLast: () => void;
  redoTheLast: () => void;
};
