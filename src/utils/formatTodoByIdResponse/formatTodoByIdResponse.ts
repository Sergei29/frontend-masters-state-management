import { TodoModel } from "../../models/todoModel/todoModel";

/**
 * @description format response object
 * @param {Object} objTodoById response object
 * @param {String} strId todo ID
 * @returns {Object} object of class TodoModel
 */
export const formatTodoByIdResponse = (
  objTodoById: Record<string, any>,
  strId: string
) => {
  return new TodoModel(
    objTodoById[TodoModel.STR_DATE_CREATED],
    objTodoById[TodoModel.STR_DATE_TO_COMPLETE_BY],
    objTodoById[TodoModel.BOOL_COMPLETED],
    objTodoById[TodoModel.STR_TITLE],
    objTodoById[TodoModel.STR_DESCRIPTION],
    strId
  );
};
