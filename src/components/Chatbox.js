import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      console.log(test);
      const messageBox = document.querySelector('#message-container');
      const message = document.createElement('div');
      message.className = 'textMessage';
      message.innerText = test;
      messageBox.append(message);
    });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <div id="message-container"> </div>
        <form onSubmit={handleSubmit}>
          <input type="text" id="message-input" onChange={handleChange} />
          <button type="submit" id="send-button">Sned</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  null,
)(Chat);
