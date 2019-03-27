import * as types from './types';
import axios from 'axios';

export function fetchThreads(boardId) {
    const request = axios.get(`http://127.0.0.1:8000/boards/${boardId}`);

    return {
        type: types.THREADS_FETCH,
        payload: request
    };
}
  
export function fetchThreadsSuccess(board) {
    return {
        type: types.THREADS_FETCH_SUCCESS,
        payload: board
    };
}

export function fetchThreadsError() {
    return {
        type: types.THREADS_FETCH_ERROR,
    }
}