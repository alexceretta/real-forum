import { connect }  from 'react-refux';
import { withRouter } from 'react-router-dom';

import { authActions } from '../Redux/Modules/Auth';
import AppView from './AppView';

const mapDispatchToProps = (dispatch) => ({
    loginSuccess: () => dispatch(authActions.loginSuccess()),
    loginError: (error) => dispatch(authActions.loginError(error))
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    ) (AppView)
);