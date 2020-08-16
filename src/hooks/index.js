import { useEffect, useState, useCallback } from "react";
import { useWebSocket } from "./WebSocket";

/**
 * [STRING_CONNECTING description]
 * @type {String}
 */
const STRING_CONNECTING = "Connecting...";

/**
 * [STRING_OPEN description]
 * @type {String}
 */
const STRING_OPEN = "Open";

/**
 * [STRING_CLOSING description]
 * @type {String}
 */
const STRING_CLOSING = "Closing...";

/**
 * [STRING_CLOSED description]
 * @type {String}
 */
const STRING_CLOSED = "Closed";

/**
 * [description]
 * @return {[type]} [description]
 */
export const useChatRoom = () => {
  const [data, setData] = useState([]);
  const [connectionState, setConnectionState] = useState([]);

  const handleSocketMessage = useCallback(({data:message}) => {
    setData(data.concat([JSON.parse(message)]));
  },[data]);

  const [readyState, send] = useWebSocket(handleSocketMessage);

  useEffect(() => {
    switch(readyState) {
      case WebSocket.CONNECTING:
        setConnectionState({readyState,message:STRING_CONNECTING,variant:"primary"});
        break;
      case WebSocket.OPEN:
        setConnectionState({readyState,message:STRING_OPEN,variant:"success"});
        break;
      case WebSocket.CLOSING:
        setConnectionState({readyState,message:STRING_CLOSING,variant:"secondary"});
        break;
      case WebSocket.CLOSED:
        setConnectionState({readyState,message:STRING_CLOSED,variant:"dark"});
        break;
      default:
        break;
    }
  },[
      readyState,
    ]
  );

  const sendMessage = useCallback((message) => {
    send(message);
  },[send]);

  return [data, connectionState, sendMessage];
};
