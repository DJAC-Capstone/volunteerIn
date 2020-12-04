import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Chat from './Chatbox';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import NavBar from './NavBar'

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
				<Route render={() => <NavBar />} />
				<Switch>
				<Route path="/login" exact component={Login} />
					<Route path="/home" exact component={Home} />
					<Route path="/register" exact component={Register} />
          <Route path="/chat" exact component={Chat} />
				</Switch>
				</div>
			</Router>
		);
	}

}
