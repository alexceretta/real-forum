import { BOARD_FETCH, BOARD_FETCH_SUCCESS, BOARD_FETCH_ERROR } from '../Actions/types'

const initialState = {
    boardData: { board: {}, error: null, loading: true }
}

export default function boardReducer (state = initialState, action) {
    let error;
    switch(action.type) {
        case BOARD_FETCH:
            return { ...state, boardData: { board: {}, error: null, loading: true } }
        case BOARD_FETCH_SUCCESS:
            return { ...state, boardData: { board: action.payload, error: null, loading: false } }
        case BOARD_FETCH_ERROR:
            error = action.payload || { message: action.payload.message };
            return { ...state, boardData: { board: {}, error: error, loading: false } }
        default:
            return state;
    }
}