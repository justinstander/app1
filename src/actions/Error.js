/**
 * API Error action type
 * @type {String}
 */
export const API_ERROR = "API_ERROR";

/**
 * API Error action
 * 
 * @param  {String} message Human friendly error message
 * @return {Object}         action
 */
export const apiError = (message) => ({ type: API_ERROR, message });
