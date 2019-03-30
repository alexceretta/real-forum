import { connect } from 'react-redux'
import { fetchThreads } from '../../Actions/thread';
import ThreadList from '../../Components/Thread/ThreadList';

const mapStateToProps = (store, ownProps) => {
    return {
        boardId: ownProps.boardId,
        threadData: store.threadState.threadData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {        
        fetchThreads: (boardId) => {
            dispatch(fetchThreads(boardId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadList);