import React , {Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom' 
import {NavBar, Home, Login, Events, Register } from './index'


export default class App extends Component {
  render(){
    return (
      <Router>
        <Route render = {() => <NavBar/>}/>
        {/* <Route path = "/events" exact component = {Events} /> */}
        <Route path = "/login" exact component = {Login} />
        {/* <Route path = "/">
          <Redirect to = "/home"/>
        </Route> */}
        <Route path = "/home" exact component = {Home} />
        <Route path = "/events" exact component = {Events} />
        <Route path = "/register" exact component = {Register} />
      </Router>
    )
  }
}