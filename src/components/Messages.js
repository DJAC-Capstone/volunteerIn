import io from 'socket.io-client';
import React, { useState } from 'react';

const Messages = ({ chat }) => {
    const [ message, setMessage ] = useState('');
    const [ allMessages, setAllMessages ] = useState([]);
    const socket = io(window.location.origin);

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         message: '',
    //         allMessages: [],
    //     }
    // }

    // this.setSt

    // socket.on('connect', () => {
    socket.on('get-message', (test) => {
        setAllMessages([ ...allMessages, test ])
    });

    const handleChange = ({ target }) => {
        setMessage(target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log('hello')
        socket.emit('send-message', message);
      }

    return (
        <div id='message-container' className='chatBox'>
            <h1>{`${chat.first_name} ${chat.last_name}`}</h1>
            <div className='message-history'>
                {
                    allMessages.map(message => {
                        return (
                            <p>{message}</p>
                        )
                    })
                }
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' id='message-input' onChange={handleChange} value={message} />
                <button type='submit' id='send-button'>Send</button>
            </form>
        </div>
    )
}

export default Messages;