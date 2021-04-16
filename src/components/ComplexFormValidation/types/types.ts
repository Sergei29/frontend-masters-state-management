import React from "react";

export type MixedValueType = string | number | boolean;
export type ObjOptionType = { value: string; name: string };

export type TextChangeEventType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type SelectChangeEventType = React.ChangeEvent<{
  name?: string | undefined;
  value: unknown;
}>;

export type InputChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type ObjValidationType = {
  bIsValid: boolean;
  strErrorMessage: string;
};

export type ObjFieldType = {
  mixedValue: null | MixedValueType; // initial null if not touched
  objValidation: ObjValidationType;
};

export type FormStateType = Record<string, ObjFieldType>;
