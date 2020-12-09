import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userStyles} from '../utils/userStyles'
import {createEvent} from '../redux/events'

class uploadPhoto extends Component {
  constructor() {
    super();
    this.state = {
      photo: '',
      

    };  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //   
  // }

  handleChange(ev) {
    this.setState({      
      [ev.target.name]: ev.target.value,
    });
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    await this.props.createEvent({...this.state})	
      this.setState({
        photo: '',
        
    });	
    this.props.history.push('/home')
  }

  render(){
const {handleChange, handleSubmit} = this
    return (
      <div>
        <form style={userStyles} onSubmit={handleSubmit}>
          <div style={{ margin: '20px' }}>
            <h3>UPLOAD PHOTO</h3>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Photo" name="photo" onChange={handleChange} value={this.state.photo } />
            </div>
            
            <button type="submit" className="btn btn-primary"> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    createEvent: (infoObject) => dispatch(createEvent(infoObject)),
  }),
)(uploadPhoto);
