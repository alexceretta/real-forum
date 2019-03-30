import { BOARD_FETCH, BOARD_FETCH_SUCCESS, BOARD_FETCH_ERROR } from './types';
import axios from 'axios';

const serviceUrl = 'http://127.0.0.1:8000';

export const fetchBoard = (boardId) => {
    
    return (dispatch) => {
    
        dispatch({ type: BOARD_FETCH });

        axios.get(`${serviceUrl}/boards/${boardId}`).then(response => {
            dispatch(fetchBoardSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchBoardError(error));
        });
    }
}
  
export function fetchBoardSuccess(board) {
    return {
        type: BOARD_FETCH_SUCCESS,
        payload: board
    };
}

export function fetchBoardError(error) {
    return {
        type: BOARD_FETCH_ERROR,
        payload: error
    }
}