import { TodoModel } from "../../models/todoModel/todoModel";

/**
 * @description format received object into array
 * @param {Object} objResponseData: data response
 * @returns {Array} array of objects with ID
 */
export const formatTodoListResponse = (
  objResponseData: Record<string, Record<string, any>>
): Record<string, any>[] => {
  return Object.keys(objResponseData).map((strTodoId: string) => {
    const {
      [TodoModel.STR_DATE_CREATED]: dateCreated,
      [TodoModel.STR_DATE_TO_COMPLETE_BY]: dateToCompleteBy,
      [TodoModel.BOOL_COMPLETED]: bCompleted,
      [TodoModel.STR_TITLE]: strTitle,
      [TodoModel.STR_DESCRIPTION]: strDescription,
    } = objResponseData[strTodoId];

    return new TodoModel(
      dateCreated,
      dateToCompleteBy,
      bCompleted,
      strTitle,
      strDescription,
      strTodoId
    );
  });
};
