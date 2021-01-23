export enum ActionName {
  ADD_GRUDGE = "ADD_GRUDGE",
  TOGGLE_FORGIVE_GRUDGE = "TOGGLE_FORGIVE_GRUDGE",
  DELETE_GRUDGE = "DELETE_GRUDGE",
  UPDATE_GRUDGE = "UPDATE_GRUDGE",
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

export type ContextStateType = {
  arrGrudges: GrudgeType[];
  submitGrudge: (objGrudge: Partial<GrudgeType>) => void;
  toggleForgive: (strId: string) => void;
  deleteGrudge: (strId: string) => void;
};
