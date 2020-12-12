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
								and organizations can send personalized email communications through Constant Contact to donors and supporters. 
								Integrated online forms automatically enter gift information into the donor database, and it can accept and process 
								recurring donations. Development professionals can use DonorPerfect to track information about donors, prospects, 
								volunteers, staff and other constituents, 
								and event managers can use auction management tools to manage silent, live, mobile and online charity auctions.
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
