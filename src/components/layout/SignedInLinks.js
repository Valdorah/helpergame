import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to="/add">New solution</NavLink></li>
      <li><a href="/" onClick={(e) => {e.preventDefault(); props.signOut();}}>Log Out</a></li>
    <li><NavLink to="/" className="btn btn-floating yellow darken-3">{ props.profile.initials }</NavLink></li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(undefined, mapDispatchToProps)(SignedInLinks);