import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { eventStyles } from '../utils/userStyles';
import { getEvents } from '../redux/events';
import { Link } from 'react-router-dom';  


class Events extends Component {
	async componentDidMount() {
		await this.props.getEvents();
	}
	render() {
		const { events } = this.props;
		return (
			<div className="allEventsContainer">
				{/* <h3 style = {{padding: "8px", fontFamily: "Josefin Sans"}}>All Events</h3> */}
				{
					events.map(event => (
						<div className='oneEvent' key={event.id}>
							<img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
							<ul>
								<Link to={`/events/${event.id}`}>{event.title}</Link>
								<h5>{event.city},{' '}{event.state}{' '}</h5>
								<li>{event.description}</li>
							</ul>
							<button>join</button>
							
						</div>
					))
				}
			</div>
		);
	}
}

export default connect(
	({ user, events }) => {
		return {
			events: events.events,
		};
	},
	dispatch => {
		return {
			getEvents: () => dispatch(getEvents()),
		};
	},
)(Events);
