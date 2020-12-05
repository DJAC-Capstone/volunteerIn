import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventStyles } from '../Utils/userStyles';
import { getEvents } from '../redux/events';

class Events extends Component {
	async componentDidMount() {
		await this.props.getEvents();
	}
	render() {
		console.log(this.props.events);
		const { events } = this.props;
		return (
			<div>
				{/* <h3 style={{ fontFamily: 'Josefin Sans, sans-serif' }}>My Events</h3>
				{this.props.user.events.map(userEvent => (
					<div style={eventStyles} key={userEvent.id}>
						<div style={{ fontWeight: 'bolder' }}>{userEvent.title}</div>
						<div>{userEvent.description}</div>
					</div>
				))} */}
				<h3>All Events</h3>
				{!!events &&
					events.map(event => (
						<div style={eventStyles} key={event.id}>
							<div style={{ fontWeight: 'bolder' }}>{event.title}</div>
							<div>{event.description}</div>
						</div>
					))}
			</div>
		);
	}
}

export default connect(
	({ user, events }) => {
		return {
			user: user.user,
			events: events,
		};
	},
	dispatch => {
		return {
			getEvents: () => dispatch(getEvents()),
		};
	},
)(Events);
