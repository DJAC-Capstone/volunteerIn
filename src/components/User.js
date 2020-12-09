import React, { Component } from 'react';
import { connect } from 'react-redux';



export default class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.match.params.userName,
        }
    }


    render(){
        let ev = this.props.location.state
        let events = []
        ev ? events = ev.events : events = []
        return( 
            <div id="user-profile-main-container">
                <p className="user-name-on-profile-page">
                    {
                    this.props.location.state ? document.getElementsByClassName("user-name-on-profile-page").innerHTML = this.props.location.state.user : ''
                    }
                </p>   
                <div className="activities">
                    <p className="activities-sections">Events Hosted</p>
                        {events.map(e=>
                            {
                            return (
                                <div key={e.id}>
                                    <p className="event-title">{e.title}</p>
                                </div>
                            )
                            })
                        }
                    <p className="activities-sections">Events Attened</p>
                    {events.map(e=>
                        {
                        return (
                            <div key={e.id}>
                                <p className="event-title">{e.title}</p>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        
        )
    }
}



