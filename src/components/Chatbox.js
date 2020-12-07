import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { getAllUsers, getUser } from '../redux/Users';


class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      class: "chatBoxClose",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.oppenMessage =this.oppenMessage.bind(this);
    this.newMessage = this.newMessage.bind(this);
  }

  async componentDidMount(){
    await this.props.getAllUsers()
  }

  handleChange(ev) {
    this.setState({
      message: ev.target.value,
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const socket = io(window.location.origin);
    socket.on('connect', () => {
      socket.emit('send-message', this.state.message);
    });
    socket.on('get-message', (test) => {
      const messageBox = document.querySelector('#message-container');
      const message = document.createElement('div');
      message.className = 'textMessage';
      message.innerText = test;
      messageBox.append(message);
    });
  }

  oppenMessage(){
      if (this.state.class === 'showAllUsers'){
          this.setState({class: 'chatBoxClose'})
      } else {
          this.setState({class: "showAllUsers"})
      }
  }
  newMessage(){
    const { handleChange, handleSubmit } = this;
    const messageBox = document.querySelector('.messages');
    const message = document.createElement('div');
    message.className = "chatBox";
    message.innerHTML = `
      <div id="message-container"> </div>
      <form onSubmit=${handleSubmit} >
        <input type="text" id="message-input" onChange=${handleChange} />
        <button type="submit" id="send-button">Sned</button>
      </form>
  `;
    messageBox.appendChild(message);
  }

  render() {
    const { handleChange, handleSubmit, newMessage } = this;
    const {users}=this.props
    return (
      <div className='messages' >
       
        <div className={this.state.class}>
          {
            users.map(user =>{
              return (
              <ul key={user.id} onClick={()=>newMessage()}>{user.first_name}</ul>
              )
            })
          }
        </div>
        <button onClick={()=>this.oppenMessage()}>Messages</button>
      </div>
    );
  }
}

export default connect(
  ({ user, users }) => ({
    user: user,
    users: users.users
  }),
  (dispatch) => ({
    getAllUsers: () => dispatch(getAllUsers()),
    getUser: () => dispatch(getUser())
  }),
)(Chat);
