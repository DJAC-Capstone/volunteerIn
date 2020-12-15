import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from '../redux/users'
import{ userStyles, img} from '../utils/userStyles'
import {updateUser} from '../redux/users'



class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name:'',
      last_name:'',
      email: '',
      phone: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.getUser();
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state)
  }
  // handleSubmit(ev){
  //   console.log('submit being handled')
  // }

  render() {
    const {user} = this.props;
    console.log(user)
    const {handleChange, handleSubmit }= this
    
    return (

      // <div >Hello world</div>)}}
      <div>
        <div><img style = {img} src = "./makeADifference.jpg"/></div>
      <div style={{marginLeft: "50px"}}>
        <h3 style={{ fontFamily: "Josefin Sans", marginTop: "100px"}}>
         Update Account Information: {user.first_name}{' '}{user.last_name}
          </h3>
           <div>
           <div style={userStyles}>
             <div style={{ margin: '20px' }}>
             <h2></h2>
               <h3>Personal Info</h3>
               <div className="form-group">
                 <form onSubmit={() => {this.props.updateUser(user.id, { first_name: this.state.first_name }); }}>
                 <input type="text" className="form-control" id="firstName" placeholder={user.first_name} name="first_name" onChange={handleChange} value={this.state.first_name } /><button style={{ margin: '5px' }}type = 'submit' >Update</button></form>
               </div>
               <div className="form-group">
               <form onSubmit={() => {this.props.updateUser(user.id, { last_name: this.state.last_name }); }}>
                 <input type="text" className="form-control" id="lastName" placeholder={user.last_name} name="last_name" onChange={handleChange} value={this.state.last_name} /><button style={{ margin: '5px' }} type = "submit">Update</button>
                 </form>
               </div>
               <hr />
               <h3>Contact Info</h3>
               <div className="form-group">
               <form onSubmit={() => {this.props.updateUser(user.id, { phone: this.state.phone }); }}>
                 <input style ={{width: "300px"}} type="text" className="form-control" id="phone" placeholder={user.phone} name="phone" onChange={handleChange} value={this.state.phone} /><button style={{ margin: '5px' }} type = "submit">Update</button></form>
               </div>
               <div className="form-group">
                 <form onSubmit={() => {this.props.updateUser(user.id, { email: this.state.email }); }}>
                 <input type="email" className="form-control" id="email" autoComplete="email" placeholder={user.email} name="email" onChange={handleChange} value={this.state.email} /><button style={{ margin: '5px' }} type = "submit">Update</button></form>
               </div>
               {/* <hr />
               <h3>Create New Password</h3>
               <div className="form-group">
               <form onSubmit={() => {this.props.updateUser(user.id, { password: this.state.password }); }}>
                 <input type="password" className="form-control" id="password" autoComplete="current-password" placeholder= '*******' name="password" onChange={handleChange} value={this.state.password} /><button style={{ margin: '5px' }}>Update</button></form>
               </div> */}
               {/* <button type="submit" className="btn btn-primary"> Update All</button> */}
             </div>
           </div>
         </div>
         
      
      
      </div></div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  updateUser: (userId, changeObject) => dispatch(updateUser(userId, changeObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
