import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Chat from './Chatbox';
import {
  NavBar, Home, Login, Events, Register,
} from './index';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route render={() => <NavBar />} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/events" exact component={Events} />
        <Route path="/register" exact component={Register} />
      </Router>
    );
  }
}
