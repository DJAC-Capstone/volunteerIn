import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../redux/users';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './Home';
import NavBar from './NavBar'
import Chatbox from './Chatbox'
import Register from './Register';
import Login from './Login';
import Events from './Events'
import Friends from './Friends'
import CreateEvent from './CreateEvent'
import User from './User'
import SingleEvent from './SingleEvent'


class App extends Component {
	
	async componentDidMount(){
		await this.props.getUser()
	}
	render() {
		console.log("app props", this.props)

		return (
			<Router>
				{/* <main> */}
					<NavBar />
					<Route exact path="/login" component={Login} />

					 {/* <Chatbox /> */}
					<Switch>
						<Route exact path="/home" render={(props)=>(<Home test="hi" {...props} />)}/>
						<Route exact path="/register" component={Register} />
						<Route exact path="/friends" component={Friends} />
						<Route exact path="/events" component={Events} />
						<Route exact path="/createEvent" component={CreateEvent} />
						<Route exact path="/:userName" component={User} />
						<Route exact path="/events/:id" component = { SingleEvent } />
					</Switch>
				{/* </main> */}
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