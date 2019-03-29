import { BOARD_FETCH, BOARD_FETCH_SUCCESS, BOARD_FETCH_ERROR } from './types';
import axios from 'axios';

const serviceUrl = 'http://127.0.0.1:8000';

export const fetchThreads = (boardId) => {
    
    return (dispatch) => {
        dispatch(BOARD_FETCH);
        axios.get(`${serviceUrl}/boards/${boardId}`).then(response => {
            dispatch(fetchThreadsSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchThreadsError(error));
        });
    }
}
  
export function fetchThreadsSuccess(board) {
    return {
        type: BOARD_FETCH_SUCCESS,
        payload: board
    };
}

export function fetchThreadsError(error) {
    return {
        type: BOARD_FETCH_ERROR,
        payload: error
    }
}