import { useEffect, useState } from "react";

/*
  CloseEvent.code 
  0–999   Reserved and not used.
1000  Normal Closure  Normal closure; the connection successfully completed whatever purpose for which it was created.
1001  Going Away  The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.
1002  Protocol Error  The endpoint is terminating the connection due to a protocol error.
1003  Unsupported Data  The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data).
1004    Reserved. A meaning might be defined in the future.
1005  No Status Received  Reserved.  Indicates that no status code was provided even though one was expected.
1006  Abnormal Closure  Reserved. Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected.
1007  Invalid frame payload data  The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).
1008  Policy Violation  The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable.
1009  Message too big The endpoint is terminating the connection because a data frame was received that is too large.
1010  Missing Extension The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't.
1011  Internal Error  The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.
1012  Service Restart The server is terminating the connection because it is restarting. [Ref]
1013  Try Again Later The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients. [Ref]
1014  Bad Gateway The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code.
1015  TLS Handshake Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).
1016–1999   Reserved for future use by the WebSocket standard.
2000–2999   Reserved for use by WebSocket extensions.
3000–3999   Available for use by libraries and frameworks. May not be used by applications. Available for registration at the IANA via first-come, first-serve.
4000–4999   Available for use by applications.
   */

export const useWebSocketHook = () => {
  const [data, setData] = useState([]);

  let socket

  // const send = (data) => socket.send(JSON.stringify({action:"sendmessage",data}))

  const handleWebSocketEvent = ({target:{protocol, readyState, url, extensions, bufferedAmount, binaryType}}) => {
    // console.log('handleWebSocketEvent --');
    // console.log('readyState', readyState);
    // console.log('protocol', protocol);
    // console.log('url',url);
    // console.log('extensions',extensions);
    // console.log('bufferedAmount',bufferedAmount);
    // console.log('binaryType',binaryType)

    switch(readyState) {
      case WebSocket.CONNECTING:
        console.log('WebSocket.CONNECTING')
        break;
      case WebSocket.OPEN:
        console.log('WebSocket.OPEN')
        break;
      case WebSocket.CLOSING:
        console.log('WebSocket.CLOSING')
        break;
      case WebSocket.CLOSED:
        console.log('WebSocket.CLOSED')
        break;
      default:
        console.warn('WebSocket.readyState DEFAULT?',readyState)
        break;
    }
  }

  const handleSocketOpen = (event) => {
    handleWebSocketEvent(event);
    console.log('handleSocketOpen --');
  };

  const handleSocketClose = (event) => {
    handleWebSocketEvent(event);
    console.log('handleSocketClose --');
    // const {code, reason, wasClean} = event;
    // console.log('code',code);
    // console.log('reason',reason);
    // console.log('wasClean',wasClean);  
  };

  const handleSocketError = (event) => {
    handleWebSocketEvent(event);
    console.error('handleSocketError',event)
  }

  const handleSocketMessage = (event) => {
    handleWebSocketEvent(event);
    console.log('handleSocketMessage --');
    console.log('event.data',event.data);
    setData(data.concat([event.data]));
    // const {origin,lastEventId,source,ports} = event
    // console.log('origin',origin);
    // console.log('lastEventId',lastEventId);
    // console.log('source',source);
    // console.log('ports',ports);
  }

  const createSocket = () => {
    console.log('createSocket',process.env.REACT_APP_API_GATEWAY_ENDPOINT)
    socket = new WebSocket(process.env.REACT_APP_API_GATEWAY_ENDPOINT);
    socket.addEventListener('open', handleSocketOpen);
    socket.addEventListener('close', handleSocketClose);
    socket.addEventListener('error', handleSocketError);
    socket.addEventListener('message', handleSocketMessage);
  }

  const destroySocket = () => {
    console.log('destroySocket')
    socket.close();
    socket.removeEventListener('open', handleSocketOpen);
    socket.removeEventListener('close', handleSocketClose);
    socket.removeEventListener('error', handleSocketError);
    socket.removeEventListener('message', handleSocketMessage);
  }
   
  useEffect(() => {
    createSocket()
    return destroySocket
  })
  
  return data;
};
