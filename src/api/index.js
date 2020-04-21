import { apiError } from "../actions/Error";
import { totalCostChanged } from "../actions/About";
import { searching, searchComplete } from "../actions/Search";

import { METHOD_GET } from "./http";

/**
 * API End Point
 * @type {String}
 */
const ENDPOINT = "https://api.haasandmilan.com/";

/**
 * total-cost path
 * @type {String}
 */
const PATH_TOTAL_COST = "total-cost";

/**
 * search path
 * @type {String}
 */
const PATH_SEARCH = "search";

/**
 * HTTP Headers
 * @type {Headers}
 */
const headers = new Headers({
  "Content-Type": "application/json",
  "Accept-Encoding": "gzip"
});

/**
 * Creates a new HTTP Request
 * 
 * @param  {String}   method     HTTP Method
 * @param  {String}   path       Function
 * @param  {Object}   data       Data (Optional)
 * @return {Request}  request    The request
 */
const createRequest = (method, path, data=null) => (
  new Request(`${ENDPOINT}${path}`, {
    method,
    headers,
    mode: "cors",
    cache: "default",
    credentials: "same-origin",
    redirect: "follow",
    body: data && JSON.stringify(data)
  })
);

/**
 * Invokes an API Call
 * 
 * @param  {Object} dispatch 
 * @param  {String} method   HTTP Method
 * @param  {String} path     API path
 * @param  {Object} data     optional data
 * @return {Object}          fetch results
 */
const invoke = async (dispatch, method, path, data=null) => {
  dispatch(apiError(null));

  return await fetch(
    createRequest(method, path, data)
  ).then(
    (response) => response.json()
  ).catch((error) => {
    dispatch(apiError(error.message));
    return null;
  });
};

/**
 * Gets Total Cost
 * 
 * @param  {[type]} dispatch [description]
 * @param  {[type]} data     [description]
 * @return {[type]}          [description]
 */
const getTotalCost = async (dispatch, data=null) => {
  const json = await invoke(dispatch, METHOD_GET, PATH_TOTAL_COST, data);
  
  json && dispatch(totalCostChanged(json)); 
};

/**
 * Calls Search
 * 
 * @param  {[type]} dispatch [description]
 * @param  {[type]} data     [description]
 * @return {[type]}          [description]
 */
const search = async (dispatch, data=null) => {
  dispatch(searching());

  const json = await invoke(dispatch, METHOD_GET, `${PATH_SEARCH}?search=${data.search}`);
  json && dispatch(searchComplete(json));
};

/**
 * api
 */
export default { 
  getTotalCost,
  search
};