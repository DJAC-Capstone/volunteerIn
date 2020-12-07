import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../redux/Users';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Chat from './Chatbox';
import Home from './Home';
import NavBar from './NavBar'
import Chatbox from './Chatbox'
import Friends from './Friends'
import Register from './Register';
import Login from './Login';

class App extends Component {
	
	async componentDidMount(){
		await this.props.getUser()
	}
	render() {
		return (
			<Router>
				<main>
					<Route render={() => <NavBar />} />
					<Route render={() => <Chatbox />} />
					{/* <Switch> */}
						<Route exact path="/login" component={Login} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/chat" component={Chat} />
						<Route exact path="/friends" component={Friends} />
					{/* </Switch> */}
				</main>
			</Router>
		);
	}
}

export default connect(
	null,
	(dispatch) => ({
	  getUser: () => dispatch(getUser())
	}),
)(App);