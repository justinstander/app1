import styled from "styled-components";

import { Form } from "redux-form";

import Container from "react-bootstrap/Container";

export const ChatContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const MessageContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const FormContainer = styled(Container)`
 `

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`
