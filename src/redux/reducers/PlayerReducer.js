import { PLAYER_ACTION_ENUM } from '../actions/PlayerAction';

const INITIAL_STATE = {
    players: {},
    dealer: {
        cards: [],
    },
    pot: 0.00,
    gameState: PLAYER_ACTION_ENUM.AWAITING_PLAYERS,

};

const playerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYER_ACTION_ENUM.BET_SUCCESS:
            return betSuccess(state);
        case PLAYER_ACTION_ENUM.BET_FAILURE:
            return betFailure(state);
        case PLAYER_ACTION_ENUM.CHECK_SUCCESS:
            return checkSuccess(state);
        case PLAYER_ACTION_ENUM.CHECK_FAILURE:
            return checkFailure(state);
        case PLAYER_ACTION_ENUM.FOLD_SUCCESS:
            return foldSuccess(state);
        case PLAYER_ACTION_ENUM.FOLD_FAILURE:
            return foldFailure(state);
        case PLAYER_ACTION_ENUM.JOIN_TABLE_SUCCESS:
            return joinTableSuccess(state);
        case PLAYER_ACTION_ENUM.JOIN_TABLE_FAILURE:
            return joinTableFailure(state);
        case PLAYER_ACTION_ENUM.LEAVE_SUCCESS:
            return leaveSuccess(state);
        case PLAYER_ACTION_ENUM.LEAVE_FAILURE:
            return leaveFailure(state);
        default:
            return state;
    }
};

const betSuccess = (state) => {

};

const betFailure = () => {

};

const checkSuccess = () => {

};

const checkFailure = () => {

};

const foldSuccess = () => {

};

const foldFailure = () => {

};

const joinTableSuccess = () => {

};

const joinTableFailure = () => {

};

const leaveSuccess = () => {

};

const leaveFailure = () => {

};

export default playerReducer;