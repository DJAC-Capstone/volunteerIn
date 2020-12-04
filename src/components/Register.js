/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import userStyles from '../Utils/userStyles';
import { signUp } from '../redux/users';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      first_name: '',
      last_name: '',
	    phone: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({      
      [ev.target.name]: ev.target.value,
    });
  }

  async handleSubmit(ev) {
	ev.preventDefault();
	await this.props.signUp({...this.state})
	
    this.setState({
      password: '',
      email: '',
      first_name: '',
      last_name: '',
	    phone: '',
	});	
  }

  render() {
	const { handleChange, handleSubmit } = this;
    return (
      <div>
        <form style={userStyles} onSubmit={handleSubmit}>
          <div style={{ margin: '20px' }}>
            <h3>Personal Info</h3>
            <div className="form-group">
              <input type="text" className="form-control" id="firstName" placeholder="First Name" name="first_name" onChange={handleChange} value={this.state.first_name } />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="lastName" placeholder="Last Name" name="last_name" onChange={handleChange} value={this.state.last_name} />
            </div>
            <hr />
            <h3>Contact Info</h3>
            <div className="form-group">
              <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" name="phone" onChange={handleChange} value={this.state.phone} />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="email" autoComplete="email" placeholder="Email" name="email" onChange={handleChange} value={this.state.email} />
            </div>
            <hr />
            <h3>Create a Password</h3>
            <div className="form-group">
              <input type="password" className="form-control" id="password" autoComplete="current-password" laceholder="Password" name="password" onChange={handleChange} value={this.state.password} />
            </div>
            <button type="submit" className="btn btn-primary"> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({
    user: user,
  }),
  (dispatch) => ({
    signUp: (infoObject) => dispatch(signUp(infoObject)),
  }),
)(Register);
