import React from "react";

import Toast from "react-bootstrap/Toast";
import ToastHeader from "react-bootstrap/ToastHeader";
import {StyledToastBody} from "./style";

export default ({item:{from, body, message}}) =>
  <Toast>
    <ToastHeader closeButton={false}>{from}</ToastHeader>
    <StyledToastBody>{body || message}</StyledToastBody>
  </Toast>;
