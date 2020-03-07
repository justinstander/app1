import _ from "lodash";
import Lambda from "aws-sdk/clients/lambda";

import { 
  totalCostChanged,
  apiError
} from "./actions/main";

import {
  searching,
  searchComplete
} from "./actions/search";

const GET_TOTAL_COST = "haasandmilan-api-getTotalCost";
const SEARCH = "haasandmilan-api-search";

const PROPERTY_PAYLOAD = "Payload";

const lambda = new Lambda({
  region: process.env.REACT_APP_API_REGION,
  accessKeyId: process.env.REACT_APP_API_ID,
  secretAccessKey: process.env.REACT_APP_API_SECRET
});

const getPayload = (data) => {
  const payload = _.get(data, PROPERTY_PAYLOAD);
  if (payload) {
    return JSON.parse(payload);
  }
  return null;
};

const invoke = async (dispatch, FunctionName, params) => {
  dispatch(apiError(null));

  return await lambda.invoke({
    FunctionName,
    Payload: JSON.stringify(params)
  }).promise().catch((error) => {
    dispatch(apiError(error.message));
  });
};

const getTotalCost = async (dispatch, params=null) => {
  const data = await invoke(dispatch, GET_TOTAL_COST, params);

  dispatch(totalCostChanged(getPayload(data))); 
};

const search = async (dispatch, params=null) => {
  dispatch(searching());

  const data = await invoke(dispatch, SEARCH, params);

  dispatch(searchComplete(getPayload(data)));
};

export default { 
  getTotalCost,
  search
};