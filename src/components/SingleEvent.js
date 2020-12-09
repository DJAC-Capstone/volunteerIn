import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleEvent } from '../redux/events';
import faker from 'faker'

class SingleEvent extends Component{
    constructor(){
        super();
        this.state = {
            id: 1,
            event: {}
          };
        }

   async componentDidMount(){
       await this.props.singleEvent(this.props.match.params.id)
    }

    componentDidUpdate(){
        if (this.state.id !== this.props.match.params.id){
          this.setState({event: this.props.event})
          this.setState({id: this.props.match.params.id})
        }
      }

    render(){
        
        const {event} = this.state
        console.log(event);

        return (
            <div className="singleeventContainer">
                        <img src={`https://d3n8a8pro7vhmx.cloudfront.net/lwvmaryland/pages/2024/attachments/original/1506612360/VOLUNTEER_%281%29.png?1506612360`}/>
                    <div className='titleContainer'>   
                        <ul>
                            <h2>{event.title}</h2>
                            <h4>Start Date: {new Date(event.date).toDateString()}</h4>
                            <h4>End Date: {new Date(event.duration).toDateString()}</h4>
                        </ul>
                        <button>Join</button>
                    </div>
                <div className='dataContainer'>
                    <div className="description">
                        <h4>Details</h4>
                        <p>{event.description}</p>
                    </div> 
                    <div className="eventLocation">
                        <h4>Location</h4>
                        <h5>{event.city}</h5>
                        <h5>{event.state}</h5>
                        <div className='mapContainer'>
                            location in map
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        event:  state.events.event
      }),
      (dispatch) => ({
        singleEvent: (id) => dispatch(singleEvent(id))
      })
)(SingleEvent)

