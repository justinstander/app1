import styled from "styled-components";

import { Form } from "redux-form";

import Container from "react-bootstrap/Container";

export const ChatContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`
