import React, { useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux"
import { Field, reduxForm, reset } from 'redux-form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useWebSocketHook } from "../../../hooks";
import { PageContainer, PageRow } from "../style";
import { ChatContainer, MessageContainer, FormContainer, StyledForm } from "./style";
import Message from '../../chat/Message'
import FormControl from '../../chat/FormControl'

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
    },[send, dispatch]
  );

  useEffect(() => {
    const { current } = messageContainer;
    const { scrollHeight, clientHeight } = current;
    console.log('Chat',scrollHeight, clientHeight)

    if( scrollHeight > clientHeight ) {
      console.log('Update Scroll')
      current.scrollTo(0, current.scrollHeight)
    }
  }, [data])
  console.log(data)

  return (
    <PageContainer>
      <PageRow>
        <Col style={{height:'100%'}}>
          <ChatContainer>
            <Row ref={messageContainer} style={{flex:1, height:'100%', overflow: 'auto'}}>
              <Col style={{height:'100%'}}>
                <MessageContainer>
                  {data && data.map((item,i) => 
                    <Row key={i}>
                      <Col>
                        <Message item={item}/>
                      </Col>
                    </Row>
                  )}
                </MessageContainer>
              </Col>
            </Row>
            <Row style={{flex:0}}>
              <Col>
                <FormContainer>
                  <Col>
                    <StyledForm onSubmit={handleSubmit(submitCallback)} autoComplete="off">
                      <Field
                        name="message"
                        component={FormControl}
                        type="text"
                        placeholder="Message"
                      />
                    </StyledForm>
                  </Col>
                </FormContainer>
              </Col>
            </Row>
          </ChatContainer>
        </Col>
      </PageRow>
    </PageContainer>
  );
}

export default reduxForm({
  form: FORM_NAME
})(Chat)