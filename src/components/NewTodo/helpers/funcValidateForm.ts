import { NewTodoType } from "../../types/types";

/**
 * @description from validation before submit
 * @param {Object} objFormState form state
 * @returns {Boolean} valid / not-valid
 */
export const funcValidateForm = (
  objFormState: NewTodoType,
  objInitialState: NewTodoType
) => {
  const { title, description } = objFormState;
  let bIsValid = true;

  const bIsFilled = title.length > 0 || description.length > 0;

  const bIsUpdated =
    objFormState.date_created !== objInitialState.date_created ||
    objFormState.date_to_complete_by !== objInitialState.date_to_complete_by ||
    objFormState.title !== objInitialState.title ||
    objFormState.description !== objInitialState.description;

  return bIsValid && bIsFilled && bIsUpdated;
};
