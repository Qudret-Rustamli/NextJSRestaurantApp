import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../Redux/authAction';

export default function (ComposedClass) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true,
    };
    componentWillUnmount() {
      this.props.dispatch(auth());
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        loading: false,
      });
      if (!nextProps.user.isAuth) {
        this.props.history.push('/login');
      } else {
        this.props.history.push('/');
      }
    }
    render() {
      if (this.state.loading) {
        return <div className="">Loading...</div>;
      }
      return <ComposedClass {...this.props} user={''} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  return connect(mapStateToProps)(AuthenticationCheck);
}
