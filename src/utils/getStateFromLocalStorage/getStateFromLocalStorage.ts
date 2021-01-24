/**
 * @description returns data from local storage
 * @param {String} strName key name
 * @returns {(Object|Array)} saved data
 */
const getStateFromLocalStorage = (strName: string) => {
  let state = localStorage.getItem(strName);
  if (!state) return null;
  return JSON.parse(state);
};

export default getStateFromLocalStorage;
