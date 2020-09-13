import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profile } = props;
  
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper red darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">Helper Game</Link>
        {links}
      </div>
    </nav>
  );
}

const mapStatetoProps = (state) => {
  return {
    ...state,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStatetoProps)(Navbar);