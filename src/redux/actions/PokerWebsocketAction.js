import Websocket from '../../client/websocket';

let websocket;

const WEBSOCKET_ACTION_ENUM = {
    CONNECT_SUCCESS: 'CONNECT_SUCCESS',
    CONNECT_FAILURE: 'CONNECT_FAILURE',
    SUBSCRIBE_SUCCESS: 'SUBSCRIBE_SUCCESS',
    SUBSCRIBE_FAILURE: 'SUBSCRIBE_FAILURE',
    DISCONNECT_SUCCESS: 'DISCONNECT_SUCCESS',
};

const WEBSOCKET_DEALER_ACTION_ENUM = {
    PLAYER_CARDS:'PLAYER_CARDS',
    FLOP: 'FLOP',
    RIVER: 'RIVER',
    TURN: 'TURN',
};

const WEBSOCKET_PLAYER_ACTION_ENUM = {
    JOINING_TABLE: 'JOINING_TABLE',
    FOLD: 'FOLD',
    RAISE: 'RAISE',
    BET: 'BET',
    CHECK: 'CHECK',
    LEFT_TABLE: 'LEFT_TABLE',
    HAS_FOCUS: 'HAS_FOCUS',
    WAITING: 'WAITING',
    WINNER: 'WINNER',
};

const WEBSOCKET_STATE_CHANGE = {
    PLAYER_STATE_CHANGE: 'PLAYER_STATE_CHANGE',
    DEALER_STATE_CHANGE: 'DEALER_STATE_CHANGE',
};

const messageTypeResolver = (incomingMessageState) => {
    if (incomingMessageState.id === WEBSOCKET_STATE_CHANGE.PLAYER_STATE_CHANGE) {
        const playerState = incomingMessageState.stateValue;
        const id = playerState.playerStatus;

        if (!WEBSOCKET_PLAYER_ACTION_ENUM[id]) {
            console.log(`Unknown player status ${WEBSOCKET_PLAYER_ACTION_ENUM[id]}`);
            return;
        }
        console.log('Received player status ' + id);
        return {
            id,
            payload: {
                playerId: playerState.playerId,
                cards: playerState.cards || [],
                amount: playerState.amount,
            }
        }
    } else if (incomingMessageState.id === WEBSOCKET_STATE_CHANGE.DEALER_STATE_CHANGE) {
        const dealerState = incomingMessageState.stateValue;
        const id = dealerState.status;

        if (!WEBSOCKET_DEALER_ACTION_ENUM[id]) {
            console.log('Unknown dealer status');
            return;
        }
        console.log('Received dealer status ' + id);
        return {
            id: dealerState.status,
            payload: {
                playerId: dealerState.playerId,
                cards: dealerState.cards || [],
            }
        }
    }
};

const onMessage = dispatch => event => {
    const message = messageTypeResolver(event);
    dispatch(receivedMessage(message));
};

const connectToWebsocket = (url) => {
    return (dispatch) => {
        websocket = new Websocket(url);
        websocket.connect()
            .then(() => dispatch(connectSuccess(url)))
            .catch(() => dispatch(connectFailure(url)));
    };
};

const subscribeToDestination = destination => {
    return (dispatch) => {
        websocket.subscribe(destination, onMessage(dispatch));
    };
};

const connectSuccess = (url) => {
    return {
        type: WEBSOCKET_ACTION_ENUM.CONNECT_SUCCESS,
        payload: url
    }
};

const connectFailure = (url) => {
    return {
        type: WEBSOCKET_ACTION_ENUM.CONNECT_FAILURE,
        payload: url
    }
};

const receivedMessage = ({id, payload}) => {
    return {
        type: id,
        payload,
    }
};

const disconnectFromWebsocket = () => {
    websocket.disconnect();

    return disconnectSuccess();
};

const disconnectSuccess = () => {
    return {
        type: WEBSOCKET_ACTION_ENUM.DISCONNECT_SUCCESS,
        payload: null,
    }
};

export { connectToWebsocket, subscribeToDestination, disconnectFromWebsocket, WEBSOCKET_DEALER_ACTION_ENUM, WEBSOCKET_PLAYER_ACTION_ENUM };