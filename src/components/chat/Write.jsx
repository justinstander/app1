import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Field, reset, reduxForm } from "redux-form";

import FormControl from "./FormControl";

import { WriteRow, WriteCol, StyledForm } from "./style";

const FORM_NAME = "chat";

const Write = ({send, connectionState, handleSubmit}) => {
  const dispatch = useDispatch();

  const submitCallback = useCallback(
    (formData) => {
      if(formData.message) {
        send(formData.message);
        dispatch(reset(FORM_NAME));
      }
    }, [send, dispatch]
  );

  return (
    <WriteRow>
      <WriteCol>
        <StyledForm onSubmit={handleSubmit(submitCallback)} autoComplete="off">
          <Field
            name="message"
            component={FormControl}
            type="text"
            placeholder={connectionState.readyState === WebSocket.OPEN ? "Message" : connectionState.message}
            props={{connectionState}}
          />
        </StyledForm>
      </WriteCol>
    </WriteRow>
  );
};

export default reduxForm({
  form: FORM_NAME
})(Write);
