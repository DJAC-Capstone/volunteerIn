import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Chat from './Chatbox';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import NavBar from './NavBar'
import Events from './Events'
import Friends from './Friends'
import CreateEvent from './CreateEvent'
import User from './User'

export default class App extends Component {
	render() {
		console.log("inappp", this.props)
		return (
			<Router>
				<div>
				<NavBar />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/chat" component={Chat} />
					<Route exact path="/:userName" component={User} />
          			<Route exact path="/events" component={Events} />
					<Route exact path="/friends" component={Friends} />
          			<Route exact path="/createEvent" component={CreateEvent} />
				</Switch>
				</div>
			</Router>
		);
	}

}
