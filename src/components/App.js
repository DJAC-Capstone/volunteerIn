import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Chat from './Chatbox';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import NavBar from './NavBar'
import Friends from './Friends'

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
				<Route render={() => <NavBar />} />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/chat" component={Chat} />
					<Route exact path="/friends" component={Friends} />
				</Switch>
				</div>
			</Router>
		);
	}

}
