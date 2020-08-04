import React from "react";
import { PageContainer } from "../Page.style";
import { useWebSocketHook } from "../../../hooks"

export default (props) => {
  const data = useWebSocketHook()
  return (
    <PageContainer>
      {data && data.map((item,i) => 
        <div key={i}>{item}</div>
      )}
    </PageContainer>
  );
}
