import React from 'react'

import {StyledFormControl} from './style'

export default ({ input, connectionState, placeholder }) =>
  <StyledFormControl
    placeholder={placeholder}
    {...input}
    disabled={connectionState.readyState !== WebSocket.OPEN}
  />
