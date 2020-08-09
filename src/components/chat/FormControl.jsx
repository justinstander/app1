import React from 'react'

import {StyledFormControl} from './style'

export default (props) => {
  const { input, placeholder } = props;
  return (
    <StyledFormControl placeholder={placeholder} {...input}  />
  )
}