import styled from "styled-components";

import { Form } from "redux-form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToastBody from "react-bootstrap/ToastBody";
import FormControl from "react-bootstrap/FormControl";

/**
 * [StyledForm description]
 * @type {[type]}
 */
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

/**
 * [StyledToastBody description]
 * @type {[type]}
 */
export const StyledToastBody = styled(ToastBody)`
  color:initial
`;

/**
 * [StyledFormControl description]
 * @type {[type]}
 */
export const StyledFormControl = styled(FormControl)`
`;

/**
 * [MessagesRow description]
 * @type {[type]}
 */
export const MessagesRow = styled(Row)`
  flex: 1;
  overflow: auto;
`;

/**
 * [MessagesCol description]
 * @type {[type]}
 */
export const MessagesCol = styled(Col)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

/**
 * [WriteRow description]
 * @type {[type]}
 */
export const WriteRow = styled(Row)`
  flex: 0;
`;

/**
 * [WriteCol description]
 * @type {[type]}
 */
export const WriteCol = styled(Col)`
  padding-bottom: 1rem;
  padding-top: 1rem;
`;
