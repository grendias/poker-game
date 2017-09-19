import WebSocket from '../../client/websocket';
import { WEBSOCKET_ACTION_ENUM } from '../actions/WebSocketAction';

let websocket;

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
        const state = incomingMessageState.stateValue;
        const id = state.playerStatus;

        if (!WEBSOCKET_PLAYER_ACTION_ENUM[id]) {
            console.log(`Unknown player status ${WEBSOCKET_PLAYER_ACTION_ENUM[id]}`);
            return;
        }
        console.log('Received player status ' + id);
        return {
            id,
            payload: {
                playerId: state.playerId,
                cards: state.cards,
                amount: state.amount,
            }
        }
    } else if (incomingMessageState.id === WEBSOCKET_STATE_CHANGE.DEALER_STATE_CHANGE) {
        const state = incomingMessageState.stateValue;

        const id = state.status;

        if (WEBSOCKET_DEALER_ACTION_ENUM[id]) {
            console.log('Unknown dealer status');
            return;
        }
        console.log('Received dealer status ' + id);
        return {
            id: state.status,
            payload: {
                playerId: state.playerId,
                cards: state.cards,
            }
        }
    }
};

const onMessage = store => event => {
    const message = messageTypeResolver(event);

    if (message) {
        store.dispatch({ type: message.id , payload: message });
    }

};

const websocketMiddleware = store => next => action => {
    switch (action.type) {
        case WEBSOCKET_ACTION_ENUM.CONNECT:
            websocket = new WebSocket(action.payload.url);
            websocket.connect()
                .then(() => store.dispatch({ type: WEBSOCKET_ACTION_ENUM.CONNECTED, payload: action.payload }));
            break;

        case WEBSOCKET_ACTION_ENUM.SUBSCRIBE:
            websocket.subscribe(action.payload.destination, onMessage(store));
            break;

        case WEBSOCKET_ACTION_ENUM.SEND_MESSAGE:
            websocket.sendMessage(action.payload.destination, action.payload.message);
            store.dispatch(WEBSOCKET_ACTION_ENUM.SENT_MESSAGE, action.payload);
            break;

        case WEBSOCKET_ACTION_ENUM.DISCONNECT:
            websocket.close();
            break;

        default: return;
    }

    return next(action);
};

export default websocketMiddleware;