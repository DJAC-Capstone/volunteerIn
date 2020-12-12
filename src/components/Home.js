import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import  { getEvents } from '../redux/events'
import { getAllUsers, getUser } from '../redux/users'
import {Link } from 'react-router-dom'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      allUsers: [],
      user: '',
      showUserComponent: false
    }
    this.createEventButton = this.createEventButton.bind(this)
    this.handleUserNameClick = this.handleUserNameClick.bind(this)
  }

  async componentDidMount() {
    await this.props.getUser()
    await this.props.fetchAllUsers()
    await this.props.fetchEvents()
    this.setState({
      events: this.props.events,
      allUsers: this.props.allUsers,
      user: this.props.user
    });
     const userFullName = this.state.user.first_name + ' ' + this.state.user.last_name
     document.getElementById('userName').innerHTML = userFullName
  }

  handleUserNameClick(){
    const u = document.getElementById('userName').innerHTML
    this.setState({
      user: u,
      showUserComponent: true
     })
  }

  createEventButton () {
    window.location.hash = "#/createEvent"
  }

  render() {
    return (
      <div className="main-container">
        <div className="left-container">
          <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
    <p onClick={this.handleUserNameClick}>{this.props.user.first_name}{' '}{this.props.user.last_name}</p>
          {this.state.showUserComponent ? <Redirect 
          to={{
            pathname: `/${this.state.user.split(' ').join('').toLowerCase()}`, 
            state: {
              fullName: this.state.user, 
              users: this.state.allUsers.users, 
              events: this.state.events,
              user: this.state.user
            }
          }}
          /> : null}

          <div className="user-post-container">
            <input placeholder="Share A Thought"></input>
            <div className="other-type-of-posts-container">
              <button onClick = {this.createEventButton}>Create Event</button>
              <button>Upload Photo</button>
              <button>Upload Video</button>
              <button><Link to =  "/updateUser">Update Profile</Link></button>
            </div>
          </div>
        </div>
        
        <div className="middle-container">
          {this.state.events.map (ev=>{
            let randID = Math.floor(Math.random() * (3 - 1) + 1)
            return (
              <div key={ev.id} className="other-users-post-container">
                <div className="profile-pic-and-name-container">
                  <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
                  {/* {this.state.allUsers.users.map(usr=>{
                    return ( */}
                    <div className="other-users-post-text">
                      <p className="full-name">{`${this.state.allUsers.users[randID].first_name} ${this.state.allUsers.users[randID].last_name}`}</p>
                      <p className="event-description">{ev.description}</p>
                    </div>
                    {/* )
                  })} */}
                </div>
              </div>
           )
           })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    allUsers: state.users,
    user: state.users.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: ()=> dispatch(getUser()),
    fetchEvents: () => dispatch(getEvents()),
    fetchAllUsers: () => dispatch(getAllUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)