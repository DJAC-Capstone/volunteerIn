import React, { Component } from 'react';
import {loginUser, getUser} from '../redux/users'
import { connect } from 'react-redux'

class Login extends Component {constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  async handleSubmit(ev){
    ev.preventDefault()
    await this.props.loginUser(this.state)
    this.props.getUser()
    this.props.history.push('/home') 
    this.setState({
    email: '',
    password: ''
    })
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
	null,
	(dispatch) => {
	  return {
    loginUser: (credentials) => dispatch(loginUser(credentials)),
    getUser: () => dispatch(getUser())
	}
  }
  )(Login)