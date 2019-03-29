import { connect } from 'react-redux'
import { fetchThreads } from '../../Actions/board';
import ViewForum from './ViewForum';

const mapStateToProps = (state) => {
    return {
        boardData: state.boardData,
        loading: state.boardData.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchThreads: (boardId) => {
            console.log(boardId);
            dispatch(fetchThreads(boardId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewForum);