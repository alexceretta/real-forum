import React from 'react';
import { connect } from 'react-redux';
import loading from './loading.svg';
import { withRouter } from 'react-router-dom'

const Callback = (props) => {

  const style = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  }

  const { auth } = props;

  auth.handleAuthentication().then(() => {
    auth.getProfile().then(() => {
      props.history.push('/');
    })    
  });

  return (
    <div style={style}>
      <img src={loading} alt="loading"/>
    </div>
  );
}

const mapStateToProps = (store) => ({
  auth: store.authState.auth
});

export default withRouter(connect(mapStateToProps)(Callback));