import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../redux/users';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';


import Home from './Home';
import NavBar from './NavBar'
import Chatbox from './Chatbox'
import Register from './Register';
import Login from './Login';
import Events from './Events'
import Friends from './Friends'
import CreateEvent from './CreateEvent'
import EditEvent from './EditEvent'
import SingleEvent from './SingleEvent'
import UploadPhoto from './UploadPhoto'


class App extends Component {
	
	async componentDidMount(){
		await this.props.getUser()
	}
	render() {
		return (
			<Router>
				<div>
				<Route render={() => <NavBar />} />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/chat" component={Chatbox} />
          <Route exact path="/events" component={Events} />
					<Route exact path="/friends" component={Friends} />
          <Route exact path="/createEvent" component={CreateEvent} />
		  <Route exact path="/:id/editEvent" component={EditEvent} />
		  <Route exact path="/:id" component={SingleEvent} />
		  <Route exact path="/:id/uploadPhoto" component={UploadPhoto} />
				</Switch>
				</div>
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