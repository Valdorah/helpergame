import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    const {auth} = this.props;

    if(auth.uid){
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="smoke-effect">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button type="submit" className="btn red darken-4 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp);