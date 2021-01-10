import axios from "axios";
import { todoActionType } from "./actions.types";
import { ActionCreatorType, ThunkActionCreatorType } from "../../types/types";
import {
  formatTodoListResponse,
  formatTodoByIdResponse,
  getErrorMessage,
  getTodoByIdUrl,
  getTodoListUrl,
} from "../../../utils/";

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

// Fetch By ID:
export const fetchTodoByIdStart: ActionCreatorType = () => ({
  type: todoActionType.FETCH_TODO_BY_ID_START,
});

export const fetchTodoByIdSuccess: ActionCreatorType = (
  objTodoDetails: Record<string, any>[]
) => ({
  type: todoActionType.FETCH_TODO_BY_ID_SUCCESS,
  payload: objTodoDetails,
});

export const fetchTodoByIdError: ActionCreatorType = (
  strErrorMessage: string
) => ({
  type: todoActionType.FETCH_TODO_BY_ID_ERROR,
  payload: strErrorMessage,
});

export const fetchTodoById = (strId: string): ThunkActionCreatorType => async (
  dispatch
) => {
  dispatch(fetchTodoByIdStart());
  try {
    const { data } = await axios.get(getTodoByIdUrl(strId));
    if (data === null) return dispatch(fetchTodoByIdError("Not found."));

    dispatch(fetchTodoByIdSuccess(formatTodoByIdResponse(data, strId)));
  } catch (objError) {
    dispatch(fetchTodoByIdError(getErrorMessage(objError)));
  }
};
