import { connect } from 'react-redux'
import { fetchThreads, fetchThreadsSuccess, fetchThreadsError } from '../../Actions/board';
import ViewForum from './ViewForum';

const mapStateToProps = (state, props) => {
    return {
        board: state.boardState,
        boardId: props.boardId
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchThreads: (boardId) => {
            dispatch(fetchThreads(boardId)).then((response) => {
                !response.error ? dispatch(fetchThreadsSuccess(response.payload.data)) : dispatch(fetchThreadsError(response.payload.data));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewForum);