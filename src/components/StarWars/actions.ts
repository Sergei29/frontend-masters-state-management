import axios from "axios";
import {
  Actions,
  ActionType,
  DispatchFnType,
  ActionAsyncType,
  CharacterDetailsType,
} from "./types";

const SW_API = "https://www.swapi.tech/api/";

/**
 * @description action creator function
 * @returns {Object} action event on start
 */
export const actionFetchStart = (): ActionType => ({
  type: Actions.FETCH_START,
});

/**
 * @description action creator function
 * @param {Array} arrCharacters fetched results
 * @returns {Object} action event on success
 */
export const actionFetchSuccess = (
  arrCharacters: Record<string, any>[]
): ActionType => ({
  type: Actions.FETCH_CHARACTERS_SUCCESS,
  payload: arrCharacters,
});

/**
 * @description action creator function
 * @param {Object} objCharacter fetched result
 * @returns {Object} action event on success
 */
export const actionFetchByIdSuccess = (
  objCharacter: Partial<CharacterDetailsType>
): ActionType => ({
  type: Actions.FETCH_BY_ID_SUCCESS,
  payload: objCharacter,
});

/**
 * @description action creator function
 * @param {String} strError error message
 * @returns {Object} action event on error
 */
export const actionFetchError = (strError: string): ActionType => ({
  type: Actions.FETCH_ERROR,
  payload: strError,
});

/**
 * @description action dispatcher function
 * @returns {Object} action event
 */

/**
 * @description action dispatcher function
 * @param {Function} dispatch dispatch event function
 * @returns {Promise | undefined} dispatching actions at various stages
 */
export const actionFetchCharacters: ActionAsyncType = async (
  dispatch: DispatchFnType
) => {
  dispatch(actionFetchStart());
  try {
    const { data } = await axios.get(`${SW_API}/people`);
    dispatch(actionFetchSuccess(data.results));
  } catch (objError) {
    const strMessage = objError.message ? objError.message : "Failed to fetch.";
    dispatch(actionFetchError(strMessage));
  }
};

export const actionFetchById: ActionAsyncType = async (
  dispatch: DispatchFnType,
  strId: string
) => {
  dispatch(actionFetchStart());
  try {
    const { data } = await axios.get(`${SW_API}/people/${strId}`);

    dispatch(actionFetchByIdSuccess(data.result.properties));
  } catch (objError) {
    const strMessage = objError.message ? objError.message : "Failed to fetch.";
    dispatch(actionFetchError(strMessage));
  }
};
