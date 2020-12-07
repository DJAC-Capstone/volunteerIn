import React, { Component } from 'react';
import { connect } from 'react-redux'
//import userStyles from '../Utils/userStyles';
import {findUser} from '../redux/Users'
import {getAllUsers} from '../redux/Users';
import {Link} from 'react-router-dom'



class Friends extends Component {
    constructor () {
      super()
      this.state = {
        username:'',
        userDetail:null,
        
      }
      //this.findUser=this.findUser.bind(this)
      this.handleSearch=this.handleSearch.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
    }
     componentDidMount(){
     this.props.getAllUsers()
      
    }
  
    handleSearch (e) {
      this.setState({ username: e.target.value })
    }
  
    handleSubmit (e) {
      e.preventDefault()

    }
  
    render () {
      const{handleSearch,handleSubmit}=this
      return (
      
        <div className='searchbar-container'>
          <form onSubmit={handleSubmit}>
            <input type='text' size='45' placeholder='name' onChange={handleSearch} value={this.state.username} />
            <button type='submit' onClick={handleSubmit}> Search</button>
          </form>
            <div>
                {
                this.props.users.map( user => {
                  if (user.first_name.toLowerCase().indexOf(this.state.username.toLowerCase()) > -1 && this.state.username!== '') {
                      return (
                        <Link to={`/users/${user.id}`} key ={user.id} >{user.first_name}</Link>
                      )
                    }
                  }) 
                }
            </div>
          </div>
        )  
      }
  }
  const mapStateToProps=(state)=>{
    return{
      users:state.users.users
    }
  }
 const mapDispatchToProps=(dispatch)=>{
    return{
      //findUser:(id)=>dispatch(findUser(id)),
      getAllUsers:()=>dispatch(getAllUsers())
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps) (Friends);