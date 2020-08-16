import React, { useRef, useEffect } from "react";

import Message from "./Message";

import { MessagesRow, MessagesCol } from "./style";

export default ({data}) => {
  const messageContainer = useRef(null);

  useEffect(() => {
    const { current } = messageContainer;
    const { scrollHeight, clientHeight } = current;

    if( scrollHeight > clientHeight ) {
      current.scrollTo(0, current.scrollHeight)
    }
  }, [data]);

  return (
    <MessagesRow ref={messageContainer}>
      <MessagesCol>
        {data && data.map((item,i) => 
          <Message key={i} item={item}/>
        )}
      </MessagesCol>
    </MessagesRow>
  )
};
