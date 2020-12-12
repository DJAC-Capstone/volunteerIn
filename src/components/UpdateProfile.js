import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from '../redux/users'
import{ userStyles} from '../utils/userStyles'


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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.getUser();
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(ev){
    console.log('submit being handled')
  }

  render() {
    const {user} = this.props;
    const {handleChange, handleSubmit }= this
    
    return (

      // <div >Hello world</div>)}}
      <div>
        <h3 style={{marginTop: "200px"}}>
          {user.first_name}{user.last_name}
          </h3>
           <div>
           <form style={userStyles} onSubmit={handleSubmit}>
             <div style={{ margin: '20px' }}>
             <h2></h2>
               <h3>Personal Info</h3>
               <div className="form-group">
                 <input type="text" className="form-control" id="firstName" placeholder={user.first_name} name="first_name" onChange={handleChange} value={this.state.first_name } /><button>Update</button>
               </div>
               <div className="form-group">
                 <input type="text" className="form-control" id="lastName" placeholder={user.last_name} name="last_name" onChange={handleChange} value={this.state.last_name} /><button>Update</button>
               </div>
               <hr />
               <h3>Contact Info</h3>
               <div className="form-group">
                 <input style ={{width: "300px"}} type="text" className="form-control" id="phoneNumber" placeholder={user.phone} name="phone" onChange={handleChange} value={this.state.phone} /><button>Update</button>
               </div>
               <div className="form-group">
                 <input type="email" className="form-control" id="email" autoComplete="email" placeholder={user.email} name="email" onChange={handleChange} value={this.state.email} /><button>Update</button>
               </div>
               <hr />
               <h3>Create New Password</h3>
               <div className="form-group">
                 <input type="password" className="form-control" id="password" autoComplete="current-password" laceholder= {user.password} name="password" onChange={handleChange} value={this.state.password} /><button>Update</button>
               </div>
               <button type="submit" className="btn btn-primary"> Update All</button>
             </div>
           </form>
         </div>
         <div>
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
