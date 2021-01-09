import { NewTodoType } from "../../types/types";

/**
 * @description from validation before submit
 * @param {Object} objFormState form state
 * @returns {Boolean} valid / not-valid
 */
export const funcValidateForm = (objFormState: NewTodoType) => {
  const { title, description } = objFormState;
  return title.length > 0 && description.length > 0;
};
