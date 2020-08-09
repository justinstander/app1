import { useEffect, useState, useCallback } from "react";

const EVENT_OPEN = 'open'
const EVENT_CLOSE = 'close'
const EVENT_ERROR = 'error'
const EVENT_MESSAGE = 'message'

export const useWebSocketHook = () => {
  const [socket] = useState(new WebSocket(process.env.REACT_APP_API_GATEWAY_ENDPOINT));
  const [data, setData] = useState(['one','two','three','four','five']);
  const [readyState, setReadyState] = useState(socket.readyState);

  const sendMessage = useCallback((data) => {
    console.log('sendMessage',data)
    socket.send(JSON.stringify({action:"sendmessage",data}))
  },[socket])

  const handleSocketOpen = useCallback(() => {
    console.log('open')
    setReadyState(socket.readyState)
  },[socket])

  const handleSocketClose = useCallback(() => {
    console.log('close')
  },[])

  const handleSocketError = useCallback(() => {
    console.error('error')
  },[])

  const handleSocketMessage = useCallback(({data:message}) => {
    console.log('message',message)
    setData(data.concat([message]))
  },[data])

  useEffect(() => {
    console.log('- Add Message listener -')
    socket.addEventListener(EVENT_MESSAGE, handleSocketMessage,{once:true});
  },[socket,handleSocketMessage])

  useEffect(() => {
    console.log('- Add Open, Close, Error listeners -')
    socket.addEventListener(EVENT_OPEN, handleSocketOpen);
    socket.addEventListener(EVENT_CLOSE, handleSocketClose);
    socket.addEventListener(EVENT_ERROR, handleSocketError);
  },[
      socket,
      handleSocketOpen,
      handleSocketClose,
      handleSocketError
    ]
  )

  useEffect(() => {
    switch(readyState) {
      case WebSocket.CONNECTING:
        console.log('readyState=WebSocket.CONNECTING')
        break;
      case WebSocket.OPEN:
        console.log('readyState=WebSocket.OPEN')
        break;
      case WebSocket.CLOSING:
        console.log('readyState=WebSocket.CLOSING')
        break;
      case WebSocket.CLOSED:
        console.log('readyState=WebSocket.CLOSED')
        break;
      default:
        console.warn('WebSocket.readyState DEFAULT?',readyState)
        break;
    }
  },[
      readyState,
    ]
  );
  
  useEffect(() => {
    console.log('create')
    setReadyState(socket.readyState)

    return () => {
      console.log('destroy')
      socket.close()
    }
  },[
    socket,
  ])

  return [data, sendMessage]
}