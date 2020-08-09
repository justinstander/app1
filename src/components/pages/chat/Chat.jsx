import React, { useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux"
import { Field, reduxForm, reset } from 'redux-form'
import Col from 'react-bootstrap/Col'
import { useWebSocketHook } from "../../../hooks";
import { PageContainer } from "../style";
import { ChatContainer, MessageContainer, FormContainer, StyledForm, StyledMessage } from "./style";

const FORM_NAME = "chat"

const Chat = (props) => {
  const { handleSubmit } = props;

  const [data, send] = useWebSocketHook()

  const messageContainer = useRef(null);
  const dispatch = useDispatch();

  const submitCallback = useCallback(
    (formData) => {
      send(formData.message)
      dispatch(reset(FORM_NAME))
    },[send,dispatch]
  );

  useEffect(() => {
    const { current } = messageContainer;
    const { scrollHeight, clientHeight } = current;
    console.log('Chat',scrollHeight, clientHeight)
    if( scrollHeight > clientHeight ) {
      console.log('Update Scroll')
      current.scrollTo(0, current.scrollHeight)
    }
  },[data])

  return (
    <PageContainer>
      <ChatContainer>
        <MessageContainer ref={messageContainer}>
          <Col>
            {data && data.map((item,i) => 
              <StyledMessage key={i}>{item}</StyledMessage>
            )}
          </Col>
        </MessageContainer>
        <FormContainer>
          <Col>
            <StyledForm onSubmit={handleSubmit(submitCallback)}>
              <Field
                name="message"
                component="input"
                type="text"
                placeholder="Message"
              />
            </StyledForm>
          </Col>
        </FormContainer>
      </ChatContainer>
    </PageContainer>
  );
}

export default reduxForm({
  form: FORM_NAME
})(Chat)