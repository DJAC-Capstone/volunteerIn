import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export default class NavBar extends Component {
  constructor(props){
  super(props)
  }

  render(){
    return (
      <div>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">VolunteerIn</a>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to = "/home">Home</Link></li>
      <li><Link to = "/events">Events</Link></li>
      <li><Link to = "/login">Log In</Link></li>
      <li><Link to = "/register">Register</Link></li>
    </ul>
  </div>
</nav>
</div>)
    }
  }
