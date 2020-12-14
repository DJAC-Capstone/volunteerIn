import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom'
import  { getEvents } from '../redux/events'
import { getAllUsers, getUser, findUser} from '../redux/users'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      allUsers: [],
      user: '',
      showUserComponent: false
    }
  }

  async componentDidMount() {
    await this.props.getUser()
    await this.props.fetchAllUsers()
    await this.props.fetchEvents()
    this.setState({
      events: this.props.events,
      allUsers: this.props.allUsers,
      user: this.props.allUsers.user
    });
  }



  render() {
    const {user}= this.state
    return (
      <div className="main-container">
        <div className="left-container">
          <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
           <Link to={`/users/profile/${user.id}`}>{user.first_name} {user.last_name}</Link>
            <div className="user-post-container">
            <input placeholder="Share A Thought"></input>
            <div className="other-type-of-posts-container">
              <button><Link to = "/createEvent">Create Event</Link></button>
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
                    <div className="other-users-post-text">
                    <Link to={`/users/${this.state.allUsers.users[randID].id}`} onClick={() => this.props.findUser(this.state.allUsers.users[randID].id)}>{`${this.state.allUsers.users[randID].first_name} ${this.state.allUsers.users[randID].last_name}`}</Link>
                      <p className="event-description">{ev.description}</p>
                    </div>
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
    fetchAllUsers: () => dispatch(getAllUsers()),
    findUser: (id) => dispatch(findUser(id))
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)