import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleEvent, followEvent,unFollowEvent } from '../redux/events';
import DisplayMaps from './DisplayMap'

class SingleEvent extends Component{
    constructor(){
        super();
        this.state = {
            id: 0,
            event: {id:0},
            arr:[],
            user: {},
          }
        this.getArr =this.getArr.bind(this)
		this.addEvent = this.addEvent.bind(this)
		this.removeEvent =this.removeEvent.bind(this)
    }

   async componentDidMount(){
       await this.props.singleEvent(this.props.match.params.id)
    }

    componentDidUpdate(prevProps){
        if (this.state.id !== this.props.match.params.id){
			this.getArr()
            this.setState({
                event: this.props.event,
                user: this.props.user,
                id: this.props.match.params.id
            })
        }
      }
    addEvent(event){
        const newArr=[...this.state.arr]
		newArr.push(event.id)
        this.setState({arr: newArr})
		this.props.followEvent(this.props.user, event)
	}
	removeEvent(event){
        const newArr=[]
        for(let i=0; i< this.state.arr.length; i++){
            if(this.state.arr[i] !== event.id){
                newArr.push(this.state.arr[i])
            }
		}
		this.props.unFollowEvent(this.props.user, event)
		this.getArr()
        this.setState({arr: newArr})
	}
	getArr(){
		const newArr=[]
		this.props.user.events?
			this.props.user.events.forEach(index =>{
				newArr.push(index.id)
			})
		:null
		this.setState({arr: newArr})
	}



    render(){
		const {arr} =this.state
        const {event} = this.state
        console.log(event);

        return (
            <div className="singleeventContainer">
                        <img src={`https://d3n8a8pro7vhmx.cloudfront.net/lwvmaryland/pages/2024/attachments/original/1506612360/VOLUNTEER_%281%29.png?1506612360`}/>
                    <div className='titleContainer'>   
                        <ul>
                            <h2>{event.title}</h2>
                            <h4>Date: {new Date(event.date).toDateString()}</h4>
                            <h4>Description: {event.description}</h4>
                        </ul>
                            {
								arr ?
                                    arr.indexOf(event.id) === -1?
                                    <button onClick={()=> this.addEvent(event)}> Join </button>:
                                    <button onClick={()=> this.removeEvent(event)}> Cancel </button>
							    :null
							}
                    </div>
                <div className='dataContainer'>
                    {/* <div className="description">
                        <h4>Details</h4>
                        <p>{event.description}</p>
                    </div>  */}
                    <div className="eventLocation">
                  <h4>Location: {' '}{event.city}, {''}{event.state}</h4>
                        <div>
                        <DisplayMaps event ={event}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        event:  state.events.event,
		user: state.users.user

      }),
      (dispatch) => ({
        singleEvent: (id) => dispatch(singleEvent(id)),
        followEvent: (userID, EventTd) => dispatch(followEvent(userID, EventTd)),
		unFollowEvent: (userID, EventTd) => dispatch(unFollowEvent(userID, EventTd)),

      })
)(SingleEvent)

