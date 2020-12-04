import React, { Component } from 'react';
import { connect } from 'react-redux';


import  { getEvents } from '../redux/events'
export class Home extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

  async componentDidMount() {
    
    await this.props.fetchEvents()
    this.setState({
      events: this.props.events
    });
  }
  
  render() {
   
    //Still need to connect users on redux    
    return (
      <div className="main-container">
        <div className="user-post-container">
          <input placeholder="Share A Thought"></input>
          <div className="other-type-of-posts-container">
            <button>Create Event</button>
            <button>Upload Photo</button>
            <button>Upload Video</button>
          </div>
        </div>

        <div>
          {this.state.events.map (ev=>{
            return (
              <div key={ev.id} className="other-users-post-container">
                <div className="profile-pic-and-name-container">
                  <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
                  <div className="other-users-post-text">
                    <p className="full-name">Person's Name (EC: 1, EA: 2)</p>
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
    events: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(getEvents()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)