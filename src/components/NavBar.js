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
							<li>
								<Link
									to="/home"
									className={navLocation === 'home' ? 'active' : null}
									onClick={() => setSelectedNav('home')}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/events"
									className={navLocation === 'events' ? 'active' : 'null'}
									onClick={() => setSelectedNav('events')}
								>
									Events
								</Link>
							</li>
							<li>
								<Link
									to="/login"
									className={navLocation === 'login' ? 'active' : 'null'}
									onClick={() => setSelectedNav('login')}
								>
									Log In
								</Link>
							</li>
							<li>
								<Link
									to="/register"
									className={navLocation === 'register' ? 'active' : 'null'}
									onClick={() => setSelectedNav('register')}
								>
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
