import React, { Component } from 'react';
import {loginUser} from '../redux/users'
import { connect } from 'react-redux'

import {getEvents} from '../redux/events'

class Login extends Component {constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchEvents()
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  async handleSubmit(ev){
    ev.preventDefault()
    await this.props.loginUser(this.state)
    await this.setState({
    email: '',
    password: ''
    })
    // this.props.history.push('/home') 
  }

  render(){
    const {handleChange, handleSubmit} = this;
		return (
      <div id="login-form">
        <h4>Login</h4>
        <form onSubmit = {handleSubmit} >
          <input type="email"	className="email-input" 	autoComplete="email" placeholder="Email address" name="email" onChange={handleChange} value={this.state.email} />
          <input type="password" className="email-input"	 autoComplete="current-password" placeholder="Password" name="password" onChange={handleChange} value={this.state.password} />
          <button type="submit">Submit</button>
        </form>
      </div>
		);
	}
}

export default connect(
	(state) => ({
	  events: state.events,
	}),
	(dispatch) => {
	  return {
    loginUser: (credentials) => dispatch(loginUser(credentials)),
    fetchEvents: () => dispatch(getEvents())
	}
  }
  )(Login)