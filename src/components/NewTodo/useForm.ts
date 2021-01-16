import React, { useState, useCallback } from "react";
import moment from "moment";
import { NewTodoModel } from "../../models/newTodoModel/newTodoModel";
import { NewTodoType, TodoType } from "../types/types";
import { funcValidateForm } from "./helpers/funcValidateForm";

/**
 * @description returns a fresh initial state object
 * @returns {Object} form state object
 */
const getIntitialState = (): NewTodoType =>
  new NewTodoModel(
    moment().format("YYYY-MM-DD"),
    moment().format("YYYY-MM-DD"),
    false,
    "",
    ""
  );

/**
 * @description custom hook
 * @returns {Object} form state and callback functions
 */
const useForm = (objIntitialState = getIntitialState()) => {
  let objInitialFormState: NewTodoType | TodoType = objIntitialState;

  if ("id" in objIntitialState) {
    const { id, ...objRestOfState } = objIntitialState as TodoType;
    objInitialFormState = objRestOfState;
  }

  /**
   * @description form state
   */
  const [objTodo, setObjTodo] = useState<NewTodoType | TodoType>(
    objInitialFormState
  );

  /**
   * @description callback on change input value
   * @param {Object} objEvent input change event object
   * @returns {undefined} sets state
   */
  const handleChange = useCallback(
    (objEvent: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = objEvent.target;
      setObjTodo((objPrevTodo) => ({
        ...objPrevTodo,
        [name]: value,
      }));
    },
    []
  );

  /**
   * @description reset form state
   * @returns {undefined} resets to initial values
   */
  const resetFormState = useCallback(() => setObjTodo(objInitialFormState), [
    setObjTodo,
    objInitialFormState,
  ]);

  /**
   * @description callback on submit form
   * @param {Function} funcCallback callback function on submit
   * @param {Object} objEvent form change event object
   * @returns {undefined} sets state, resets to initial values
   */
  const handleSubmit = useCallback(
    (funcCallback: (...args: any) => void = () => {}) => (
      objEvent: React.FormEvent
    ) => {
      objEvent.preventDefault();
      const bFormValid = funcValidateForm(objTodo, objInitialFormState);

      if (!bFormValid) {
        alert("form invalid!");
        return;
      }

      funcCallback();
      resetFormState();
    },
    [objTodo, resetFormState, objInitialFormState]
  );

  return { objTodo, handleChange, handleSubmit, resetFormState };
};

export default useForm;
