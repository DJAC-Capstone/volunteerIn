import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllUsers, getUser } from '../redux/Users';
import Friends from './Friends'
import Register from './Register';
import Login from './Login';



class NavBar extends Component {
	render() {
	const {user} = this.props
		return (
			<div>
			<nav id='navBar'>
				<h1 className="brand">VolunteerIn</h1>						
				{
					user.id === undefined?
					<Login/>:
					<div>
						<Friends/>
						<Link to="/home" >Home</Link>
						<Link to="/events">Events</Link>
						<Link to="#"><img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>Hi {user.first_name}</Link>
					</div>
				}
			</nav>	
				{
					this.props.user.id === undefined?
					<div id="register-container">
						<h2>Register</h2>
						<Register/>
					</div>: null
				}
			</div>
		);
	}
}
export default connect(
	(state) => ({
	  user:  state.users.user,
	}),
	(dispatch) => ({
	  getAllUsers: () => dispatch(getAllUsers()),
	  getUser: () => dispatch(getUser())
	}),
  )(NavBar);