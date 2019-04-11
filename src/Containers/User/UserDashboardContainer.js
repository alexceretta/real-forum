import { connect } from 'react-redux';
import UserDashboard from '../../Components/User/UserDashboard';
import { userUpdate } from '../../Actions/user';

const mapStateToProps = (store) => ({
    auth: store.authState.auth
});

const mapDispatchToProps = {
    userUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);