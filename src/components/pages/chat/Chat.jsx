import React, { useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux"
import { Field, reduxForm, reset } from 'redux-form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useWebSocketHook } from "../../../hooks";
import { PageContainer, PageRow, PageColumn } from "../style";
import { ChatContainer, StyledForm } from "./style";
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
        <PageColumn>
          <ChatContainer>
            <Row ref={messageContainer} style={{ flex:1, overflow: 'auto'}}>
              <Col style={{paddingTop: '1rem'}}>
                {data && data.map((item,i) => 
                  <Message item={item}/>
                )}
              </Col>
            </Row>
            <Row style={{flex:0}}>
              <Col style={{paddingBottom: '1rem', paddingTop: '1rem'}}>
                <StyledForm onSubmit={handleSubmit(submitCallback)} autoComplete="off">
                  <Field
                    name="message"
                    component={FormControl}
                    type="text"
                    placeholder="Message"
                  />
                </StyledForm>
              </Col>
            </Row>
          </ChatContainer>
        </PageColumn>
      </PageRow>
    </PageContainer>
  );
}

export default reduxForm({
  form: FORM_NAME
})(Chat)