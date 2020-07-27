import { useEffect, useState } from "react";

export const useWebHook = () => {
  const socket = new WebSocket(process.env.REACT_APP_API_GATEWAY_ENDPOINT);
  
  const send = (data) => socket.send(JSON.stringify({action:"sendmessage",data}))

  const [data, setData] = useState(["Begin..."]);

  const handleSocketOpen = (event) => {
    console.log(event);
    send("Incoming Message")
  };

  const handleSocketClose = (event) => console.log(event);
  const handleSocketError = (event) => console.log(event);
  const handleSocketMessage = (event) => setData(data.concat([event.data]));

  useEffect(() => {
    console.log('Create',process.env.REACT_APP_API_GATEWAY_ENDPOINT)
    socket.addEventListener('open', handleSocketOpen);
    socket.addEventListener('close', handleSocketClose);
    socket.addEventListener('error', handleSocketError);
    socket.addEventListener('message',handleSocketMessage);
    
    return () => {
      console.log('Destroy');
      socket.close();
      socket.removeEventListener('open', handleSocketOpen);
      socket.removeEventListener('close', handleSocketClose);
      socket.removeEventListener('error', handleSocketError);
      socket.removeEventListener('message',handleSocketMessage);
    }
  },[])

  return data;
};
