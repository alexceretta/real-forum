import { THREADS_FETCH, THREADS_FETCH_SUCCESS, THREADS_FETCH_ERROR } from '../Actions/types'

const initialState = {
    threadData: { threads: [], error: null, loading: true }
}

export default function threadReducer (state = initialState, action) {
    let error;
    switch(action.type) {
        case THREADS_FETCH:
            return { ...state, threadData: { threads: [], error: null, loading: true } }
        case THREADS_FETCH_SUCCESS:
            return { ...state, threadData: { threads: action.payload, error: null, loading: false } }
        case THREADS_FETCH_ERROR:
            error = action.payload || { message: action.payload.message };
            return { ...state, threadData: { threads: [], error: error, loading: false } }
        default:
            return state;
    }
}