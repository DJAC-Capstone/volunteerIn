import React, { Component } from 'react';
import { connect } from 'react-redux'
//import userStyles from '../Utils/userStyles';
import {findUser} from '../redux/users'
import {getUser} from '../redux/users'


class Friends extends Component {
    constructor () {
      super()
      this.state = {
        first_name: '',
        
      }
      //this.findUser=this.findUser.bind(this)
      this.handleSearch=this.handleSearch.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
      this.props.getUser()
    }
  
    handleSearch (e) {
     
      this.setState({ first_name: e.target.value })
    }
  
    handleSubmit (e) {
      e.preventDefault()
     
        this.props.findUser(this.state.first_name);
        this.setState({first_name:''})
      
    }
  
    render () {
      const{handleSearch,handleSubmit}=this
      return (
      
        <div className='searchbar-container'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              size='45'
              placeholder='username'
              onChange={handleSearch}
              value={this.state.first_name} />
            <button
              type='submit'
              onClick={handleSubmit}>
              Search
            </button>
          </form>
        </div>
      )  
    }
  }
  mapStateToProps=({user})=>{
    return{
      user:user
    }
  }
  mapDispatchToProps=(dispatch)=>{
    return{
      findUser:(user)=>dispatch(findUser(user,id)),
      getUser:()=>dispatch(getUser())
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps) (Friends);
 

// import React from 'react'
// import {connect} from 'react-redux'
// import {getAllCategories} from '../redux'

// import history from '../history'

// class Friends extends React.Component {
//   handleChange = evt => {
//     evt.preventDefault()
//     history.push(`/search/${evt.target.value}`)
//   }

//   render() {
//     return (
//       <div>
       
//         <form onSubmit={this.handleSubmit}>
//           <label className="label-icon valign-wrapper">
//             <i className="material-icons">search</i> Search
//           </label>
//           <input
//             type="search"
//             id="search"
//             className="input-field"
//             placeholder="Search..."
//             name="productName"
//             onChange={this.handleChange}
//           />
//         </form>
//       </div>
//     )
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCategories: () => dispatch(getAllCategories())
//   }
// }

// const mapStateToProps = state => ({
//   categories: getAllCategories(state)
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Friends)