import React, { Component } from 'react';
import { connect } from 'react-redux';


export class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.match.params.userName
        }
    }
    render(){
        const user = this.state
        console.log(user)
        console.log("props here", this.state.user)
        return(
        <div>
            <p>You can do anything</p>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
     
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(User)

