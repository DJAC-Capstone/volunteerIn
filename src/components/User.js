import React, { Component } from 'react';
import { connect } from 'react-redux';



export class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.match.params.userName
        }
    }

    componentDidMount(){
        document.getElementById('user-name-on-profile-page').innerText = this.state.user
    }



    render(){
        return(
        <div>
            <div id="user-name-on-profile-page"></div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        events: state.events
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(User)

