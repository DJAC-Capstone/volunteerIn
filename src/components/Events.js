import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents, followEvent} from '../redux/events';
import { Link } from 'react-router-dom';  


class Events extends Component {
	constructor() {
		super()
		this.state = {
			arr:[]
		}
	  }
	async componentDidMount() {
		await this.props.getEvents();
	}
	// componentDidUpdate(){
	// 	if(this.state.arr.length === 0){
	// 		this.props.getUser()
	// 		const newArr = this.props.user.events.map(item => {
	// 					return item.id
	// 	  })
	// 		this.setState({arr: newArr})
	// 	}
	// }

	addEvent(event){	
		const eventArr= [...this.state.arr]
		this.props.followEvent(this.props.user, event)
		eventArr.push(event.id)
		this.setState({arr: eventArr})
	}
	removeEvent(event){
        const newArr=[]
        for(let i=0; i< this.state.arr.length; i++){
            if(this.state.arr[i] !== event.id){
                newArr.push(this.state.arr[i])
            }
        }
		this.setState({arr : newArr})
		
    }


	render() {
		console.log(this.props.state);
		
		const {arr} =this.state
		const { events } = this.props;
		return (
			<div className="allEventsContainer">
				{
					events.map(event => (
						<div className='oneEvent' key={event.id}>
							<img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
							<ul>
								<Link to={`/events/${event.id}`}>{event.title}</Link>
								<h5>{event.city},{' '}{event.state}{' '}</h5>
								<li>{event.description}</li>
							</ul>
							{
								arr.indexOf(event.id) === -1 ? 
								<button onClick={()=> this.addEvent(event)}>Join</button>:
								<button onClick={()=> this.removeEvent(event)}> Cancel </button>
							}
						</div>
					))
				}
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			events: state.events.events,
			user: state.users.user
		};
	},
	dispatch => {
		return {
			getEvents: () => dispatch(getEvents()),
			followEvent: (userID, EventTd) => dispatch(followEvent(userID, EventTd)),
			getUser: () => dispatch(getUser())
		};
	},
)(Events);
