import Lambda from 'aws-sdk/clients/lambda';

import { 
  totalCostChanged,
  apiError
} from "./actions/main";

import {
  searchComplete
} from "./actions/search"

const GET_TOTAL_COST = "haasandmilan-api-getTotalCost";
const SEARCH = "haasandmilan-api-search";

const logError = (message) => {
  console.error('Api', message);
};

const lambda = new Lambda({
  region: process.env.REACT_APP_API_REGION,
  accessKeyId: process.env.REACT_APP_API_ID,
  secretAccessKey: process.env.REACT_APP_API_SECRET
});

const getPayload = (data) => {
  if (data && data.Payload) {
    return JSON.parse(data.Payload)
  }
  return null;
};

/**
 * ClientContext: 'STRING_VALUE',
 * InvocationType: Event | RequestResponse | DryRun,
 * LogType: None | Tail,
 * Qualifier: 'STRING_VALUE'
 */
const invoke = async (dispatch, FunctionName, params) => {
  dispatch(apiError(null))

  return await lambda.invoke({
    FunctionName,
    Payload: JSON.stringify(params)
  }).promise().catch((error) => {
    logError(error.message);
    dispatch(apiError(error.message));
  });
};

const getTotalCost = async (dispatch, params=null) => {
  const data = await invoke(dispatch, GET_TOTAL_COST, params);

  dispatch(totalCostChanged(getPayload(data)));
};

const search = async (dispatch, params=null) => {
  const data = await invoke(dispatch, SEARCH, params);

  dispatch(searchComplete(getPayload(data)));
}

export default { 
  getTotalCost,
  search
};