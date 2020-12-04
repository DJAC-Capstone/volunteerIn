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

        <div className="other-users-post-container">
          <div className="profile-pic-and-name-container">
            <img src="https://randomuser.me/api/portraits/men/34.jpg" />
            <div className="other-users-post-text">
              <p className="full-name">Alex Baker (EC: 10, EA: 45)</p>
              <p className="user-thoughts">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div className="other-users-post-container">
          <div className="profile-pic-and-name-container">
            <img src="https://randomuser.me/api/portraits/women/8.jpg" />
            <div className="other-users-post-text">
              <p className="full-name">Mary Klein (EC: 1, EA: 2)</p>
              <p className="user-thoughts">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div className="other-users-post-container">
          <div className="profile-pic-and-name-container">
            <img src="https://randomuser.me/api/portraits/women/89.jpg" />
            <div className="other-users-post-text">
              <p className="full-name">Eva Rhodes (EC: 6, EA: 5)</p>
              <p className="user-thoughts">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
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