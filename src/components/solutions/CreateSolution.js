import React, { Component } from "react";
import { connect } from 'react-redux';
import { createSolution } from "../../store/actions/SolutionActions";

class CreateSolution extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createSolution(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="smoke-effect">
          <h5 className="grey-text text-darken-3">Create new solution</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" value={this.state.content} onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button type="submit" className="btn red darken-4 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSolution: (solution) => dispatch(createSolution(solution))
  }
}

export default connect(undefined, mapDispatchToProps)(CreateSolution);