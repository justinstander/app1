import React from "react";

import { useChatRoom } from "../../../hooks/ChatRoom";

import Messages from "../../chat/Messages";
import Write from "../../chat/Write";

import { ChatContainer } from "./style";

const Chat = (props) => {
  const [data, connectionState, send] = useChatRoom();
  return (
    <ChatContainer>
      <Messages data={data} />
      <Write connectionState={connectionState} send={send} />
    </ChatContainer>
  );
};

export default Chat;
