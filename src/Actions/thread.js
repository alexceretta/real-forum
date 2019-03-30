import { THREADS_FETCH, THREADS_FETCH_SUCCESS, THREADS_FETCH_ERROR } from './types';
import axios from 'axios';

const serviceUrl = 'http://127.0.0.1:8000';

export const fetchThreads = (boardId) => {
    
    return (dispatch) => {
    
        dispatch({ type: THREADS_FETCH });

        axios.get(`${serviceUrl}/threads?board=${boardId}`).then(response => {
            dispatch(fetchThreadsSuccess(response.data.results));
        })
        .catch(error => {
            dispatch(fetchThreadsError(error));
        });
    }
}
  
export function fetchThreadsSuccess(board) {
    return {
        type: THREADS_FETCH_SUCCESS,
        payload: board
    };
}

export function fetchThreadsError(error) {
    return {
        type: THREADS_FETCH_ERROR,
        payload: error
    }
}