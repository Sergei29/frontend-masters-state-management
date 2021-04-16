import React, { useState } from "react";
import {
  MixedValueType,
  InputChangeEventType,
  FormStateType,
  ObjValidationType,
} from "../types/types";

type HookProps = {
  objInitFormState: FormStateType;
  funcSubmitCallback: (...args: any) => void;
};

type HookReturnType = {
  handleChange: (objEvent: InputChangeEventType) => void;
  handleBlur: (
    objEvent: React.FocusEvent<HTMLInputElement>,
    funcValidator: (mixedValue: MixedValueType) => ObjValidationType
  ) => void;
  objFormState: FormStateType;
  handleSubmit: (objEvent: React.FormEvent) => void;
};

const useForm = ({
  objInitFormState,
  funcSubmitCallback,
}: HookProps): HookReturnType => {
  const [objFormState, setObjFormState] = useState<FormStateType>(
    objInitFormState
  );

  const handleChange = (objEvent: InputChangeEventType) => {
    const { name, value } = objEvent.target;
    setObjFormState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], mixedValue: value },
    }));
  };

  const handleBlur = (
    objEvent: React.FocusEvent<HTMLInputElement>,
    funcValidator: (mixedValue: MixedValueType) => ObjValidationType
  ) => {
    const { name, value } = objEvent.target;
    const objValidation = funcValidator(value);
    setObjFormState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], objValidation },
    }));
  };

  const handleSubmit = (objEvent: React.FormEvent) => {
    objEvent.preventDefault();
    funcSubmitCallback(objFormState);
  };

  return {
    handleBlur,
    handleChange,
    objFormState,
    handleSubmit,
  };
};

export default useForm;
