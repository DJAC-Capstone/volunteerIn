import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { getUser } from '../redux/users';


class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            events: [],
            friends: []
        }
    }
    async componentDidMount(){
		await this.props.getUser()
	}
    componentDidUpdate(){
        if(this.state.user === ''){
            this.setState({user: this.props.user, events: this.props.user.events, friends: this.props.user.friends})
        }
    }
    render(){
        const {events, user, friends} = this.state
        return( 
            <div id="user-profile-main-container">
                <div className='user-mini-profile'> 
					<img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
                    <h2>{user.first_name} {user.last_name}</h2>
                    <h4>Friends: {friends.length}</h4>
                    <h4>Events: {events.length}</h4>
                </div>   
                <div className="activities">
                        {events.map(event =>
                            {
                            return (
                            <div className='oneEvent-users-profile' key={event.id}>
                                <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
                                <ul>
                                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                                    <li>{event.description}</li>
                                    <h5>{event.city},{' '}{event.state}{' '}</h5>
                                   
                                </ul>
                                <div>
                                    <h4>Commment</h4>
                                    <li>{event.comments}</li>
                                </div>
                            </div>
                            )
                            })
                        }
                </div>
            </div>
        
        )
    }
}


export default connect(
	(state) => ({
		user: state.users.user
      }),(dispatch) => ({
        getUser: () => dispatch(getUser())
      })
  )(User)
