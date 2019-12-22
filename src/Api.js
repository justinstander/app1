import Lambda from 'aws-sdk/clients/lambda';

import { 
  totalCostChanged,
  apiError
} from "./actions";

const logError = (message) => {
  console.error('Api', message);
}

const lambda = new Lambda({
  region: 'us-east-1',
  accessKeyId: process.env.REACT_APP_API_ID,
  secretAccessKey: process.env.REACT_APP_API_SECRET
});

/**
 * FunctionName: 'STRING_VALUE'
 * ClientContext: 'STRING_VALUE',
 * InvocationType: Event | RequestResponse | DryRun,
 * LogType: None | Tail,
 * Payload: Buffer.from('...') || 'STRING_VALUE' // Strings will be Base-64 encoded on your behalf
 * Qualifier: 'STRING_VALUE'
 */
const getTotalCost = (dispatch) => {
  lambda.invoke({
    FunctionName:"haasandmilan-api-getTotalCost"
  }, (error, data) => {
    if(error) {
      logError(error.message);
      dispatch(apiError(error.message));
    } else {
      dispatch(totalCostChanged(JSON.parse(data.Payload).body));
    }
  });
};

export default { getTotalCost };