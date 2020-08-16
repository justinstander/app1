import { useEffect } from "react";

export const useAutoScroll = (messageContainer, data) => {
  useEffect(() => {
    const { current } = messageContainer;
    const { scrollHeight, clientHeight } = current;

    if( scrollHeight > clientHeight ) {
      current.scrollTo(0, current.scrollHeight);
    }
  }, [messageContainer, data]);
}