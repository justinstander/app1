import Lambda from 'aws-sdk/clients/lambda';

import { 
  totalCostChanged,
  apiError
} from "./actions";

const logError = (message) => {
  console.error('Api', message);
}

const lambda = new Lambda({
  region: process.env.REACT_APP_API_REGION,
  accessKeyId: process.env.REACT_APP_API_ID,
  secretAccessKey: process.env.REACT_APP_API_SECRET
});

const getBody = (data) => {
  if( data && data.Payload ) {
    return JSON.parse(data.Payload).body
  }
  return "";
};

/**
 * FunctionName: 'STRING_VALUE'
 * ClientContext: 'STRING_VALUE',
 * InvocationType: Event | RequestResponse | DryRun,
 * LogType: None | Tail,
 * Payload: Buffer.from('...') || 'STRING_VALUE' // Strings will be Base-64 encoded on your behalf
 * Qualifier: 'STRING_VALUE'
 */
const invoke = async (dispatch, FunctionName, Payload) => {
  const data = await lambda.invoke({
    FunctionName,
    Payload
  }).promise().catch((error) => {
    logError(error.message);
    dispatch(apiError(error.message));
  });

  if( data ) {
    dispatch(totalCostChanged(getBody(data)));
  }
};

const getTotalCost = (dispatch, params=null) => {
  invoke(
    dispatch,
    "haasandmilan-api-getTotalCost",
    params ? JSON.stringify(params) : null
  );
};

export default { getTotalCost };