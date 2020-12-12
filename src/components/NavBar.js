import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllUsers, logoutUser, getUser } from '../redux/users';
import Friends from './Friends'
import Register from './Register';
import Login from './Login';

class NavBar extends Component {
	constructor() {
		super()
		this.handleLogout = this.handleLogout.bind(this)
	  }
	async handleLogout(){
		await this.props.logoutUser()
		this.props.getUser()
		window.location.hash = "#/"
	  }

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
						<i className="fa fa-sign-out fa-3x" onClick={()=>this.handleLogout()}></i>
					</div>
				}
			</nav>	
				{
					this.props.user.id === undefined?
					<div id="register-container">
						<Register/>
						<div>
							<h3>About us</h3>
							<p>
								Dashboard analytics and reporting provide insight into what drives donations, 
								Welcome to VolunteerIn, your volunteer community hub! Here you will be able to create a profile that will include your favorite quotes and interests. You will also be able to create an event you would like to host and see other volunteer events in your area.  You can also follow other users and see what events they have attended and created.
							</p>
						</div>
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
	  logoutUser: () => dispatch(logoutUser()),
	  getUser: ()=> dispatch(getUser())
	}),
  )(NavBar);
