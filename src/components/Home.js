import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import  { getEvents } from '../redux/events'
import  { getPosts } from '../redux/posts'
import { getAllUsers } from '../redux/users'


export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts:[],
      events: [],
      allUsers: [],
      user: '',
      showUserComponent: false
    }
    this.createPostButton = this.createPostButton.bind(this)
    //this.creatEventButton = this.createEventButton.bind(this)
    this.createEventButton = this.createEventButton.bind(this)
    this.handleUserNameClick = this.handleUserNameClick.bind(this)
  }

  async componentDidMount() {
    await this.props.fetchAllUsers()
    await this.props.fetchEvents()
    await this.props.fetchPosts()
    this.setState({
      events: this.props.events,
      posts: this.props.posts,
      allUsers: this.props.allUsers,
      user: this.props.allUsers.users[Math.floor(Math.random()*(3-1)+1)]
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
  createPostButton () {
    window.location.hash = "#/posts"
  }
  // uploadVideoButton () {
  //   window.location.hash = "#/uploadVideo"
  // }
  

  render() {

    return (
      <div className="main-container">
        <div className="left-container">
          <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
          <p id="userName" onClick={this.handleUserNameClick}></p>
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
              <button onClick = {this.createPostButton}>Create Post</button>
              <button onClick = {this.uploadVideoButton}>Upload Video</button>
            </div>
           
           
          </div>
           {/* <div>
         {this.state.events.map(event=>{
              return (<div key={event.id}>
                  <img src={event.imagePreviewUrl}/>
              </div>)
            })}
         </div> */}
        </div>
         <div >

         {this.state.posts.map(post=>{
           console.log(post.imagePreviewUrl)
              return (<div key={post.id}>
                  <img src={post.imagePreviewUrl}/>
                  <h5>{post.comment}</h5>
                  <img id='new-img'/>
                  
              </div>)
            })}
         </div>
        
        <div className="middle-container">
          {this.state.events.map (ev=>{
            let randID = Math.floor(Math.random() * (3 - 1) + 1)
            return (
              <div key={ev.id} className="other-users-post-container">
                <div className="profile-pic-and-name-container">
                {/* <img src={ev.imagePreviewUrl}/> */}
                  <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
                  {/* {this.state.allUsers.users.map(usr=>{
                    return ( */}
                    <div className="other-users-post-text">
                      <p className="full-name">{`${this.state.allUsers.users[randID].first_name} ${this.state.allUsers.users[randID].last_name}`}</p>
                      <p className="event-description">{ev.description}</p>
                      {/* <img src={ev.imagePreviewUrl}/> */}
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
    posts: state.posts.posts,
    allUsers: state.users,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(getEvents()),
    fetchAllUsers: () => dispatch(getAllUsers()),
    fetchPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)