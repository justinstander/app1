import { useState, useCallback } from "react";
import { useWebSocketHook } from "./WebSocket"

/**
 * [description]
 * @return {[type]} [description]
 */
export const useChatRoomHook = () => {
  const [data, setData] = useState([]);

  const handleSocketMessage = useCallback(({data:message}) => {
    console.log('message',message)
    setData(data.concat([JSON.parse(message)]))
  },[data])

  const send = useWebSocketHook(handleSocketMessage);

  const sendMessage = useCallback((message) => {
    console.log('sendMessage',message)
    send(message)
  },[send])

  return [data, sendMessage]
}