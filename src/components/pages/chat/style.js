import styled from "styled-components";

import { Form } from "redux-form";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'

export const ChatContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const MessageContainer = styled(Row)`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const FormContainer = styled(Row)`
  flex: 0;
 `

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

export const StyledMessage = styled.div`
  flex: 0
`