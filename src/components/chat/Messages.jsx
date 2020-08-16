import React, { useRef } from "react";

import Message from "./Message";
import { useAutoScroll } from "../../hooks/AutoScroll";

import { MessagesRow, MessagesCol } from "./style";

export default ({data}) => {
  const messageContainer = useRef(null);

  useAutoScroll(messageContainer, data)

  return (
    <MessagesRow ref={messageContainer}>
      <MessagesCol>
        {data && data.map((item,i) => 
          <Message key={i} item={item}/>
        )}
      </MessagesCol>
    </MessagesRow>
  );
};
