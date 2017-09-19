const WEBSOCKET_ACTION_ENUM = {
    CONNECT: 'CONNECT',
    CONNECTED: 'CONNECTED',
    SEND_MESSAGE: 'SEND_MESSAGE',
    SENT_MESSAGE: 'SENT_MESSAGE',
    DISCONNECT: 'DISCONNECT',
    SUBSCRIBE: 'SUBSCRIBE',
};

const connectToWebsocket = (url) =>  {
    return {
        type: WEBSOCKET_ACTION_ENUM.CONNECT,
        payload: {
            url
        },
    };
};

const subscribeToDestination = (destination) =>  {
    return {
        type: WEBSOCKET_ACTION_ENUM.SUBSCRIBE,
        payload: {
            destination
        },
    };
};


export { WEBSOCKET_ACTION_ENUM, connectToWebsocket, subscribeToDestination };