// import React, {useState, useEffect} from 'react'
// import {Link, useParams} from 'react-router-dom'
// import decode from 'jwt-decode'
// function NotUserPage() {
//     const {id} = useParams()
//     const [user, setUser] = useState({})
//     const loggedUser = decode(localStorage.getItem("token"))
//     const username = loggedUser.username
//     const userId = loggedUser.user_id 
//     const [followUnFollow, setFollowUnFollow] = useState("true")
   
  
//     const toggleFollowUnFollow = () => {
//         setFollowUnFollow(!followUnFollow)
//     }
    

//     const fetchUserData = () => {
//         fetch(`http://localhost:3000/users/${id}`)
//             .then(res => res.json())
//             .then(data => setUser(data))
//     }

//     useEffect(() => {
//         fetchUserData()
//     }, [])


//     const unFollow = () => {
//         fetch(`http://localhost:3000/users/${id}/unfollow`, {
//             method: "POST",
//             body:  JSON.stringify({
//                 follower_id: userId,
//                 followee_id: id
//             }),
//             headers: {
//                 "Content-type": "application/json",
//                 "Authorization": `bearer ${localStorage.getItem("token")}`,
//               },
            
//             })
//             .then(res => res.json())
//             .then(data => console.log(data))
                
//     }
  
//     useEffect(() => {
//         unFollow()
//     }, [followUnFollow])
   

 


//     const handleFollow = () => {
//         fetch(`http://localhost:3000/users/${id}/follow`, {
//             method: "POST",
//             body:  JSON.stringify({
//                 follower_id: userId,
//                 followee_id: id
//             }),
//             headers: {
//                 "Content-type": "application/json",
//                 "Authorization": `bearer ${localStorage.getItem("token")}`,
//               },
            
//             })
//             .then(res => res.json())
//             .then(data => console.log(data))
                
//     }
//     useEffect(() => {
//         handleFollow()
//     }, [followUnFollow])
  
//     const fButton = () => {
       
//         toggleFollowUnFollow() ? handleFollow() : unFollow()

//     }

//     return (
//         <div>
//            {user.username} 
//            <button onClick={fButton}>follow</button>
//         </div>
//     )
// }

// export default NotUserPage

import React from 'react';
import { connect } from 'react-redux';

import {addFriend} from '../redux';
import { render } from 'react-dom';

class Friend extends React.Component{
constructor(props){
super(props)
this.state =Object.assign({},this.props.user,{friend:{}});
this.addFriend=this.addFriend.bind(this);

}

handleFollow(ev){
    ev.preventDevault();
    this.state.friend.userId=this.props.user.id;
    this.props.addFriend(this.state.friend)

}
render(){
    const {user,firends}=this.props;
    return(<div>
        <h1>friend</h1>
    </div>)
}
}

const mapStateToProps=({friends,users},{id})=>{
    const user=users.find(user=>user.id===id*1);
    return{
        friends,
        user
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addFriend:(friend)=>dispatch(addFriend(friend,id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Friend);
