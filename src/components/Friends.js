import React, { Component } from 'react';
import { connect } from 'react-redux'
//import userStyles from '../Utils/userStyles';
import {findUser} from '../redux/Users'
import {getAllUsers} from '../redux/Users';



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
      //history.push(`/search/${evt.target.value}`
      console.log(e.target.value )
      this.setState({ username: e.target.value })
    }
  
    handleSubmit (e) {
      e.preventDefault()
     console.log(this.props.users)
      // this.props.findUser(this.state.username);
        this.setState({username:''})
      
    }
  
    render () {
      const{handleSearch,handleSubmit}=this
      return (
      
        <div className='searchbar-container'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              size='45'
              placeholder='name'
              onChange={handleSearch}
              value={this.state.username} />
            <button
              type='submit'
              onClick={handleSubmit}>
              Search
            </button>
          </form>
          {/* {
          this.props.users.map((user, index)=>{
						return <p key={index}>{user.name} <button className="btn btn-primary" onClick={()=>{this.setState({userDetail:user})}}>View Timeline</button></p>
          })
        } */}
        </div>
      )  
    }
  }
  const mapStateToProps=(state)=>{
    return{
      users:state.user
    }
  }
 const mapDispatchToProps=(dispatch)=>{
    return{
      //findUser:(id)=>dispatch(findUser(id)),
      getAllUsers:()=>dispatch(getAllUsers())
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps) (Friends);