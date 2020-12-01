import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { NavBar, Home, Login, Events, Register } from './index';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Route render={() => <NavBar />} />
				<Route path="/login" exact component={Login} />
				<Route path="/">
					<Redirect to="/home" />
				</Route>
				<Route path="/home" exact component={Home} />
				<Route exact path="/events" exact component={Events} />
				<Route path="/register" exact component={Register} />
			</Router>
		);
	}
}
