import React from "react";
import { Field, reduxForm } from 'redux-form'

import { useWebSocketHook } from "../../../hooks";
import { PageContainer } from "../style";
import { ChatContainer, MessageContainer, StyledForm } from "./style";

const FORM_NAME = "chat"

const Chat = (props) => {
  const [data, send] = useWebSocketHook()
  const { handleSubmit } = props;

  return (
    <PageContainer>
      <ChatContainer>
        <MessageContainer>
          {data && data.map((item,i) => 
            <div key={i}>{item}</div>
          )}
        </MessageContainer>
        <StyledForm onSubmit={handleSubmit((formData) => send(formData.message))}>>
          <Field
            name="message"
            component="input"
            type="text"
            placeholder="Message"
          />
        </StyledForm>
      </ChatContainer>
    </PageContainer>
  );
}

export default reduxForm({
  form: FORM_NAME
})(Chat)