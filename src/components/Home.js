import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { getEvents } from '../redux/events'
import { getAllUsers } from '../redux/users'


export class Home extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      allUsers: []
    }
    this.createEventButton = this.createEventButton.bind(this)
  }

  async componentDidMount() {
    await this.props.fetchAllUsers()
    await this.props.fetchEvents()
    this.setState({
      events: this.props.events,
      allUsers: this.props.allUsers
    });
  }
  createEventButton () {
    window.location.hash = "#/createEvent"
  }
  render() {

    //Still need to connect users on redux
    return (
      <div className="main-container">
        <div className="left-container">
          <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
          <p>Person's Name</p>
          <div className="user-post-container">
            <input placeholder="Share A Thought"></input>
            <div className="other-type-of-posts-container">
              <button onClick = {this.createEventButton}>Create Event</button>
              <button>Upload Photo</button>
              <button>Upload Video</button>
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
    allUsers: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(getEvents()),
    fetchAllUsers: () => dispatch(getAllUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)