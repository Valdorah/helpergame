import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button type="submit" className="btn red darken-4 z-depth-0">Sing In</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;