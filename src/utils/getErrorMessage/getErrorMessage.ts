/**
 * @description extract error message from response
 * @param {Object} objErrorResponse error response
 * @returns {String} error message
 */
export const getErrorMessage = (
  objErrorResponse: Record<string, any>
): string => {
  const strErrorMessage = "Operation failed.";

  if (objErrorResponse.message) {
    return objErrorResponse.message;
  }

  if (objErrorResponse.response) {
    return `${strErrorMessage}. code: ${objErrorResponse.response.code}. ${objErrorResponse.response.data}`;
  }

  return strErrorMessage;
};
