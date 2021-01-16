import axios from "axios";
import { todoActionType } from "./actions.types";
import { ActionCreatorType, ThunkActionCreatorType } from "../../types/types";
import {
  formatTodoListResponse,
  formatTodoByIdResponse,
  getErrorMessage,
  getTodoByIdUrl,
  getTodoListUrl,
  updateTodoList,
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
  objTodoDetails: Record<string, any>
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

export const fetchTodoById = (
  strTodoId: string
): ThunkActionCreatorType => async (dispatch) => {
  dispatch(fetchTodoByIdStart());
  try {
    const { data } = await axios.get(getTodoByIdUrl(strTodoId));
    if (data === null) return dispatch(fetchTodoByIdError("Not found."));

    dispatch(fetchTodoByIdSuccess(formatTodoByIdResponse(data, strTodoId)));
  } catch (objError) {
    dispatch(fetchTodoByIdError(getErrorMessage(objError)));
  }
};

// Update todo by ID:
export const updateTodoByIdStart: ActionCreatorType = () => ({
  type: todoActionType.UPDATE_TODO_START,
});

export const updateTodoByIdSuccess: ActionCreatorType = (
  arrNewTodos: Record<string, any>[]
) => ({
  type: todoActionType.UPDATE_TODO_SUCCESS,
  payload: arrNewTodos,
});

export const updateTodoByIdError: ActionCreatorType = (
  strErrorMessage: string
) => ({
  type: todoActionType.UPDATE_TODO_ERROR,
  payload: strErrorMessage,
});

export const updateTodoById = ({
  objTodoDetails,
  strTodoId,
}: Record<string, any>): ThunkActionCreatorType => async (
  dispatch,
  getState
) => {
  dispatch(updateTodoByIdStart());
  try {
    const { data } = await axios.put(getTodoByIdUrl(strTodoId), objTodoDetails);
    const state = getState();

    const objNewTodoState = {
      loading: false,
      error: null,
      data: updateTodoList(data, strTodoId, state.todo),
      current: formatTodoByIdResponse(data, strTodoId),
    };

    dispatch(updateTodoByIdSuccess(objNewTodoState));
  } catch (objError) {
    dispatch(updateTodoByIdError(getErrorMessage(objError)));
  }
};

// Delete todo by ID:
export const deleteTodoByIdStart: ActionCreatorType = () => ({
  type: todoActionType.DELETE_TODO_START,
});

export const deleteTodoByIdSuccess: ActionCreatorType = (
  arrNewTodos: Record<string, any>[]
) => ({
  type: todoActionType.DELETE_TODO_SUCCESS,
  payload: arrNewTodos,
});

export const deleteTodoByIdError: ActionCreatorType = (
  strErrorMessage: string
) => ({
  type: todoActionType.DELETE_TODO_ERROR,
  payload: strErrorMessage,
});

export const deleteTodoById = (
  strTodoId: string
): ThunkActionCreatorType => async (dispatch, getState) => {
  dispatch(deleteTodoByIdStart());
  try {
    await axios.delete(getTodoByIdUrl(strTodoId));
    const state = getState();
    const arrNewTodos = state.todo.data.filter(
      (objTodo) => objTodo.id !== strTodoId
    );
    dispatch(deleteTodoByIdSuccess(arrNewTodos));
  } catch (objError) {
    dispatch(deleteTodoByIdError(getErrorMessage(objError)));
  }
};

// create new todo:
export const createTodoStart: ActionCreatorType = () => ({
  type: todoActionType.CREATE_TODO_START,
});

export const createTodoSuccess: ActionCreatorType = (
  objNewTodo: Record<string, any>
) => ({
  type: todoActionType.CREATE_TODO_SUCCESS,
  payload: objNewTodo,
});

export const createTodoError: ActionCreatorType = (
  strErrorMessage: string
) => ({
  type: todoActionType.CREATE_TODO_ERROR,
  payload: strErrorMessage,
});

export const createTodo = (
  objTodoDetails: Record<string, any>,
  onSuccess: () => void = () => {}
): ThunkActionCreatorType => async (dispatch) => {
  dispatch(createTodoStart());
  try {
    const { data } = await axios.post(getTodoListUrl(), objTodoDetails);
    if (data.error) return dispatch(createTodoError(data.error));

    const objNewTodo = {
      ...objTodoDetails,
      id: data.name,
    };

    onSuccess();
    dispatch(createTodoSuccess(objNewTodo));
  } catch (objError) {
    dispatch(createTodoError(getErrorMessage(objError)));
  }
};
