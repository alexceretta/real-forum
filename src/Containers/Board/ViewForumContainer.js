import { connect } from 'react-redux'
import { fetchBoard } from '../../Actions/board';
import ViewForum from '../../Components/Board/ViewForum';

const mapStateToProps = (store) => {
    return {
        boardData: store.boardState.boardData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBoard: (boardId) => {
            dispatch(fetchBoard(boardId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewForum);