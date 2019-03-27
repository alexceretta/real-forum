import { THREADS_FETCH, THREADS_FETCH_SUCCESS, THREADS_FETCH_ERROR } from '../Actions/types'

const initialState = {
    board: { threads: [], error: null, loading: false }
}

export const boardReducer = (state = initialState, action) => {
    let error;
    switch(action.type) {
        case THREADS_FETCH:
            return { ...state, board: { threads: [], error: null, loading: true } }
        case THREADS_FETCH_SUCCESS:
            return { ...state, board: { ...action.payload, threads: action.payload.threads, error: null, loading: false } }
        case THREADS_FETCH_ERROR:
            error = action.payload || { message: action.payload.message };
            return { ...state, board: { threads: [], error: error, loading: false } }
        default:
            return state;
    }
}