import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getAllUsers, followFrined, getUser} from '../redux/users';
import {Link} from 'react-router-dom'



class Friends extends Component {
    constructor () {
      super()
      this.state = {
        username:'',
        userDetail:null,
        
      }
      this.addFriend=this.addFriend.bind(this)
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

    addFriend(user,friendId){
      
      if(user.friends === null){
        const arr=[friendId]
        this.props.followFrined(user.id, arr)
      }else{ 
        const arr=[...user.friends ,friendId]
        this.props.followFrined(user.id, arr)
      }
   
    }

    render () {
      const{handleSearch,handleSubmit}=this
      const {username} = this.state
      const {users}= this.props
      return (
      
        <div className='searchbar-container'>
          <form onSubmit={handleSubmit}>
            <input type='text' size='45' placeholder='name' onChange={handleSearch} value={username} />
            <button type='submit' onClick={handleSubmit}> Search</button>
          </form>
          <ul id="myUL" >
                {
                users.map( user => {
                  if (user.first_name.toLowerCase().indexOf(username.toLowerCase()) > -1 && username!== '') {
                      return (
                        <div key ={user.id}>
                          <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * (40 - 1) + 1)}.jpg`}/>
                          <Link to={`/users/${user.id}`}  >{user.first_name}</Link>
                          <button onClick={()=>this.addFriend(this.props.user, user.id)}>Follow</button>
                        </div>
                      )
                    }
                  }) 
                }
            </ul>
          </div>
        )  
      }
  }
  const mapStateToProps=(state)=>{
    return{
      users:state.users.users,
      user:state.users.user
    }
  }
 const mapDispatchToProps=(dispatch)=>{
    return{
      followFrined:(id, arr)=>dispatch(followFrined(id, arr)),
      getAllUsers:()=>dispatch(getAllUsers())
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps) (Friends);