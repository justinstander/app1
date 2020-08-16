import { useEffect, useState, useCallback } from "react";

/**
 * Web Socket Instance
 */
let _socket

/**
 * [description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
const socketMessage = (data) => JSON.stringify({action:"sendmessage",data})

/**
 * [EVENT_OPEN description]
 * @type {String}
 */
export const EVENT_OPEN = 'open'

/**
 * [EVENT_CLOSE description]
 * @type {String}
 */
export const EVENT_CLOSE = 'close'

/**
 * [EVENT_ERROR description]
 * @type {String}
 */
export const EVENT_ERROR = 'error'

/**
 * [EVENT_MESSAGE description]
 * @type {String}
 */
export const EVENT_MESSAGE = 'message'

/**
 * [description]
 * @return {[type]} [description]
 */
export const useWebSocketHook = (handleSocketMessage) => {
  const [readyState, setReadyState] = useState(WebSocket.CONNECTING);

  const sendMessage = (message) => _socket.send(socketMessage(message))

  const handleSocketOpen = useCallback(() => {
    console.log('open')
    setReadyState(_socket.readyState)
  },[])

  const handleSocketClose = useCallback(() => {
    console.log('close')
  },[])

  const handleSocketError = useCallback(() => {
    console.error('error')
  },[])

  useEffect(() => {
    console.log('create')
    _socket = new WebSocket(process.env.REACT_APP_API_GATEWAY_ENDPOINT);
    setReadyState(_socket.readyState)

    return () => {
      console.log('destroy')
      _socket.close()
      _socket.removeEventListener(EVENT_OPEN, handleSocketOpen);
      _socket.removeEventListener(EVENT_CLOSE, handleSocketClose);
      _socket.removeEventListener(EVENT_ERROR, handleSocketError);
    }
  },[
    handleSocketError,
    handleSocketClose,
    handleSocketOpen
  ])

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
    console.log('- Add Open, Close, Error listeners -')
    _socket.addEventListener(EVENT_OPEN, handleSocketOpen);
    _socket.addEventListener(EVENT_CLOSE, handleSocketClose);
    _socket.addEventListener(EVENT_ERROR, handleSocketError);
    
  },[
      handleSocketError,
      handleSocketClose,
      handleSocketOpen
    ]
  )

  useEffect(() => {
    console.log('- Add Message listener -')
    _socket.addEventListener(EVENT_MESSAGE, handleSocketMessage);
    return () => {
      console.log('- Remove Message Listener -')
      _socket.removeEventListener(EVENT_MESSAGE, handleSocketMessage);
    }
  },[handleSocketMessage])

  return sendMessage
}