import { useEffect, useState, useCallback } from "react";

/**
 * [ACTION_SENDMESSAGE description]
 * @type {String}
 */
const ACTION_SENDMESSAGE = "sendmessage";

/**
 * Web Socket Instance
 */
let _socket;

/**
 * [description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
const socketMessage = (data) => JSON.stringify({action:ACTION_SENDMESSAGE, data})

/**
 * [EVENT_OPEN description]
 * @type {String}
 */
export const EVENT_OPEN = "open";

/**
 * [EVENT_CLOSE description]
 * @type {String}
 */
export const EVENT_CLOSE = "close";

/**
 * [EVENT_ERROR description]
 * @type {String}
 */
export const EVENT_ERROR = "error";

/**
 * [EVENT_MESSAGE description]
 * @type {String}
 */
export const EVENT_MESSAGE = "message";

/**
 * [description]
 * @return {[type]} [description]
 */
export const useWebSocket = (handleSocketMessage) => {
  const [readyState, setReadyState] = useState(WebSocket.CONNECTING);

  const send = (message) => _socket.send(socketMessage(message));

  const handleSocketOpen = useCallback(() => {
    setReadyState(_socket.readyState);
  },[]);

  const handleSocketClose = useCallback(() => {
    setReadyState(_socket.readyState);
  },[]);

  const handleSocketError = useCallback(() => {
    setReadyState(_socket.readyState);
  },[]);

  useEffect(() => {
    _socket = new WebSocket(process.env.REACT_APP_API_GATEWAY_ENDPOINT);
    setReadyState(_socket.readyState)

    return () => {
      _socket.close();
      _socket.removeEventListener(EVENT_OPEN, handleSocketOpen);
      _socket.removeEventListener(EVENT_CLOSE, handleSocketClose);
      _socket.removeEventListener(EVENT_ERROR, handleSocketError);
    }
  },[
    handleSocketError,
    handleSocketClose,
    handleSocketOpen
  ]);

  useEffect(() => {
    _socket.addEventListener(EVENT_OPEN, handleSocketOpen);
    _socket.addEventListener(EVENT_CLOSE, handleSocketClose);
    _socket.addEventListener(EVENT_ERROR, handleSocketError);
    
  },[
      handleSocketError,
      handleSocketClose,
      handleSocketOpen
    ]
  );

  useEffect(() => {
    _socket.addEventListener(EVENT_MESSAGE, handleSocketMessage);
    return () => {
      _socket.removeEventListener(EVENT_MESSAGE, handleSocketMessage);
    }
  },[handleSocketMessage]);

  return [readyState, send];
};
