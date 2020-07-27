import React from "react";
import { PageContainer } from "../Page.style";
import { useWebHook } from "../../../hooks"

export default (props) => {
  const data = useWebHook()
  return (
    <PageContainer>
      {data && data.map((item,i) => 
        <div key={i}>{item}</div>
      )}
    </PageContainer>
  );
}
