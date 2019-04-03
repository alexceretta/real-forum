import { connect } from 'react-redux';
import UserDashboard from '../../Components/User/UserDashboard';

const mapStateToProps = (store) => ({
    auth: store.authState.auth
});

export default connect(mapStateToProps)(UserDashboard);