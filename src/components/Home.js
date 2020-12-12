import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import  { getEvents } from '../redux/events'
// import { getAllUsers } from '../redux/users'



export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      allUsers: [],
      userEvents: []
    }

    this.createEventButton = this.createEventButton.bind(this)
    // this.handleUserNameClick = this.handleUserNameClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchEvents()
    this.setState({
      events: this.props.events,
      allUsers: this.props.allUsers.users,
      user: this.props.allUsers.user,
      userEvents: this.props.events.users
    })
  }

  // componentDidUpdate(){
  //   if(this.props.events[0].users === undefined){
  //     this.fetchEvents
  //   }
  //   console.log("........", this.state)
  // }

  createEventButton () {
    window.location.hash = "#/createEvent"
  }

  render() {
    console.log("props in render", this.props)
    const {user} = this.props.allUsers
    const {users} = this.props.allUsers
    let i = 0
    const userEvents = this.props.allUsers.users

    return (
      <div className="main-container">
        <div className="left-container">
          <img src={`https://randomuser.me/api/portraits/women/${++i}.jpg`}/>
          <Link to={{
            pathname: `/${user.first_name}${user.last_name}`,
            // state: {
            //   events: events,
            //   user: user
            // }
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
          
          {user.friends.map (friendID=>{
            return (
              <div key={++i} className="other-users-post-container">
                <div className="profile-pic-and-name-container">
                  <img src={`https://randomuser.me/api/portraits/women/${i}.jpg`}/>
                  <div>
                    <p>{`${users[friendID].first_name}${users[friendID].last_name}`}</p>
                    <p>{`${user.events[0].title}`}</p>
                    <p>{`${user.events[0].description}`}</p>
                  </div>
                    )
               

              
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
    // fetchAllUsers: () => dispatch(getAllUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)