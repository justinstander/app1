import React from "react";

import { useWebSocketHook } from "../../../hooks";

import Messages from "../../chat/Messages";
import Write from "../../chat/Write";

import { ChatContainer } from "./style";

const Chat = (props) => {
  const [data, send] = useWebSocketHook();
  
  return (
    <ChatContainer>
      <Messages data={data} />
      <Write send={send} />
    </ChatContainer>
  );
}

export default Chat