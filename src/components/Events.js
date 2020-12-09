import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventStyles } from '../utils/userStyles';
import { getEvents } from '../redux/events';
import {Link} from 'react-router-dom';

class Events extends Component {
	async componentDidMount() {
		await this.props.getEvents();
	}
	editEventButton(){
		window.location.hash=`#/editEvent`
	}
	render() {
		const { events } = this.props;
		return (
			<div>
				<h3 style = {{padding: "8px", fontFamily: "Josefin Sans"}}>All Events</h3>
				{!!events &&
					events.map(event => (
						<div style={eventStyles} key={event.id}>
							<div style={{ fontWeight: 'bolder' }}>{event.title}</div>
              <div>{event.city},{' '}{event.state}{' '}</div>
              <div>{event.description}</div>
			  <div >
			  {/* <button onClick = {this.editEventButton}>Edit Event</button> */}
			  <Link  to={`${event.id}/editEvent`}params={{event: event.id}}>
          <h2>EditEvent</h2>
          </Link>
          </div>
                   
						</div>
					))}
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
