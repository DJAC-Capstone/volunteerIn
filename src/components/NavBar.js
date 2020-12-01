import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navLocation: 'home',
		};
		this.setSelectedNav = this.setSelectedNav.bind(this);
	}
	setSelectedNav(selection) {
		this.setState({
			navLocation: selection,
		});
	}
	render() {
		const { setSelectedNav, props, state } = this;
		const { navLocation } = state;
		return (
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<div className="navbar-brand">VolunteerIn</div>
						</div>
						<ul className="nav navbar-nav">
							<li className={navLocation === 'home' ? 'active' : 'null'}>
								<Link to="/home" onClick={() => setSelectedNav('home')}>
									Home
								</Link>
							</li>
							<li className={navLocation === 'events' ? 'active' : 'null'}>
								<Link to="/events" onClick={() => setSelectedNav('events')}>
									Events
								</Link>
							</li>
							<li className={navLocation === 'login' ? 'active' : 'null'}>
								<Link to="/login" onClick={() => setSelectedNav('login')}>
									Log In
								</Link>
							</li>
							<li className={navLocation === 'register' ? 'active' : 'null'}>
								<Link to="/register" onClick={() => setSelectedNav('register')}>
									Register
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
