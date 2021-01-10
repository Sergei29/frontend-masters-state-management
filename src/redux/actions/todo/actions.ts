import axios from "axios";
import { getTodoListUrl } from "../../../utils/getTodoUrl/getTodoUrl";
import { todoActionType } from "./actions.types";
import { ActionCreatorType, ThunkActionCreatorType } from "../../types/types";
import { getErrorMessage } from "../../../utils/getErrorMessage/getErrorMessage";
import { formatTodoListResponse } from "../../../utils/formatTodoListResponse/formatTodoListResponse";

export const fetchTodoListStart: ActionCreatorType = () => ({
  type: todoActionType.FETCH_TODO_LIST_START,
});

export const fetchTodoListSuccess: ActionCreatorType = (
  arrTodoList: Record<string, any>[]
) => ({
  type: todoActionType.FETCH_TODO_LIST_SUCCESS,
  payload: arrTodoList,
});

export const fetchTodoListError: ActionCreatorType = (
  strErrorMessage: string
) => ({
  type: todoActionType.FETCH_TODO_LIST_ERROR,
  payload: strErrorMessage,
});

export const fetchTodoList = (): ThunkActionCreatorType => async (dispatch) => {
  dispatch(fetchTodoListStart());
  try {
    const { data } = await axios.get(getTodoListUrl());
    if (data === null) return dispatch(fetchTodoListError("Not found."));
    dispatch(fetchTodoListSuccess(formatTodoListResponse(data)));
  } catch (objError) {
    dispatch(fetchTodoListError(getErrorMessage(objError)));
  }
};
