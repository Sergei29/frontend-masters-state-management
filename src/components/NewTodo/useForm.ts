import React, { useState, useCallback } from "react";
import moment from "moment";
import { NewTodoModel } from "../../models/newTodoModel/newTodoModel";
import { NewTodoType } from "../types/types";
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
const useForm = () => {
  const [objTodo, setObjTodo] = useState<NewTodoType>(getIntitialState());

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
  const resetFormState = useCallback(() => setObjTodo(getIntitialState()), []);

  /**
   * @description callback on submit form
   * @param {Object} objEvent form change event object
   * @returns {undefined} sets state, resets to initial values
   */
  const handleSubmit = useCallback(
    (objEvent: React.FormEvent) => {
      objEvent.preventDefault();
      const bFormValid = funcValidateForm(objTodo);

      if (!bFormValid) {
        alert("form invalid!");
        return;
      }

      console.log("form submitted: ", objTodo);
      resetFormState();
    },
    [objTodo, resetFormState]
  );

  return { objTodo, handleChange, handleSubmit, resetFormState };
};

export default useForm;
