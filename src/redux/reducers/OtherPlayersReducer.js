import { WEBSOCKET_PLAYER_ACTION_ENUM } from "../actions/PokerWebsocketAction";
import { PLAYER_ACTION_ENUM} from "../actions/PlayerAction";

const INITIAL_STATE = {
    players: {},
    dealer: {
        cards: [],
    },
    pot: 0.00,
    gameState: PLAYER_ACTION_ENUM.AWAITING_PLAYERS,

};

const otherPlayerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WEBSOCKET_PLAYER_ACTION_ENUM.BET:
            return changeState(state, action.payload);
        case WEBSOCKET_PLAYER_ACTION_ENUM.CHECK:
            return changeState(state, action.payload);
        case WEBSOCKET_PLAYER_ACTION_ENUM.FOLD:
            return changeState(state, action.payload);
        case WEBSOCKET_PLAYER_ACTION_ENUM.HAS_FOCUS:
            return changeState(state, action.payload);
        case WEBSOCKET_PLAYER_ACTION_ENUM.JOINING_TABLE:
            return changeState(state, action.payload);
        case WEBSOCKET_PLAYER_ACTION_ENUM.LEFT_TABLE:
            return changeState(state, action.payload);
        case WEBSOCKET_PLAYER_ACTION_ENUM.RAISE:
            return changeState(state, action.payload);
        case WEBSOCKET_PLAYER_ACTION_ENUM.WAITING:
            return changeState(state, action.payload);
        case WEBSOCKET_PLAYER_ACTION_ENUM.WINNER:
            return changeState(state, action.payload);
        default:
            return state;
    }
};

const changeState = (state, payload) => {
    return Object.assign(state.players[payload.playerId], {
        cards: payload.cards,
        amount: payload.amount,
    })
};

export default otherPlayerReducer;