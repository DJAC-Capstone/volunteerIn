import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import  { getEvents } from '../redux/events'
import { getAllUsers } from '../redux/users'


export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      allUsers: [],
      userName: '',
      dummyUsers:[],
      dummyUser:{}
    }
    console.log('111',this.props)

    this.createEventButton = this.createEventButton.bind(this)
    // this.handleUserNameClick = this.handleUserNameClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchEvents()
    this.setState({
      events: this.props.events,
      allUsers: this.props.allUsers.users,
      user: this.props.allUsers.user
    })
  }

  createEventButton () {
    window.location.hash = "#/createEvent"
  }

  render() {
    const {user} = this.props.allUsers
    const {users} = this.props.allUsers
    const {events} = this.props
    let i = 0;
    return (
      <div className="main-container">
        <div className="left-container">
          <img src={`https://randomuser.me/api/portraits/women/${++i}.jpg`}/>
          <Link to={{
            pathname: `/${user.first_name}${user.last_name}`,
            state: {
              events: events,
              user: user
            }
          }}>{`${user.first_name} ${user.last_name}`}</Link>
          <div className="user-post-container">
            <input placeholder="Post"></input>
            <div className="other-type-of-posts-container">
              <button onClick = {this.createEventButton}>Create Event</button>
              <button>Upload Photo</button>
              <button>Post</button>
            </div>
          </div>
        </div>
        <div className="middle-container">
          {users.map (friend => { // friends.map should be changed to friends.map after adding users table in db
            return (
              <div key={friend.id} className="other-users-post-container">
                <div className="profile-pic-and-name-container">
                  <img src={`https://randomuser.me/api/portraits/women/${++i}.jpg`}/>
                  <p className="full-name">{`${friend.first_name} ${friend.last_name}`}</p>
                </div>
                <div className="friends-most-recent-event">
                  <p>friend.events[0].title</p>
                  <p>friend.events[0].description</p>
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
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(getEvents()),
    fetchAllUsers: () => dispatch(getAllUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)