import { post, del } from '../../client/rest';

const TABLE_ACTION_ENUM = {
    ADD_PLAYER_TO_TABLE_SUCCESS: 'ADD_PLAYER_TO_TABLE_SUCCESS',
    ADD_PLAYER_TO_TABLE_FAILURE: 'ADD_PLAYER_TO_TABLE_FAILURE',
    REMOVE_PLAYER_FROM_TABLE_SUCCESS: 'REMOVE_PLAYER_FROM_TABLE_SUCCESS',
    REMOVE_PLAYER_FROM_TABLE_FAILURE: 'REMOVE_PLAYER_FROM_TABLE_FAILURE',
};


const addPlayerToTable = (tableId, username) => {
    return (dispatch) => {
        post('http://localhost:8080/texas-holdem/texas-holdem-mw/game', {
            username,
            tableId,
        }).then((players) => {
            dispatch(addPlayerToTableSuccess(players));
        }).catch(() => {
            dispatch(addPlayerToTableFailure());
        });
    }
};

const removePlayerFromTable = (tableId, username) => {
    return (dispatch) => {
        del(`http://localhost:8080/texas-holdem/texas-holdem-mw/game/${tableId}/${username}`)
            .then(() => dispatch(removePlayerFromTableSuccess(tableId, username)))
            .catch(() => dispatch(removePlayerFromTableFailure()));
    }
};

const addPlayerToTableSuccess = (players) => {
    return {
        type: TABLE_ACTION_ENUM.ADD_PLAYER_TO_TABLE_SUCCESS,
        payload: { players },
    };
};

const addPlayerToTableFailure = () => {
    return {
        type: TABLE_ACTION_ENUM.ADD_PLAYER_TO_TABLE_FAILURE,
        payload: { },
    };
};

const removePlayerFromTableSuccess = (tableId, username) => {
    return {
        type: TABLE_ACTION_ENUM.REMOVE_PLAYER_FROM_TABLE_SUCCESS,
        payload: {
            tableId,
            username,
        },
    };
};


const removePlayerFromTableFailure = () => {
    return {
        type: TABLE_ACTION_ENUM.REMOVE_PLAYER_FROM_TABLE_FAILURE,
        payload: { },
    };
};

export { addPlayerToTable, removePlayerFromTable, }