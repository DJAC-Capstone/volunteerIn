import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userStyles} from '../utils/userStyles'
import {createEvent} from '../redux/events'

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      date: '',
      city: '',
	    state: '',

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
        title: '',
        description: '',
        date: '',
        city: '',
        state: '',
    });	
    this.props.history.push('/events')
  }

  render(){
const {handleChange, handleSubmit} = this
    return (
      <div className='createEvent'>
        <form style={userStyles} onSubmit={handleSubmit}>
          <div style={{ margin: '20px' }}>
            <h3>Event Info</h3>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Title" name="title" onChange={handleChange} value={this.state.title } />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Description" name="description" onChange={handleChange} value={this.state.description} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Date" name="date" onChange={handleChange} value={this.state.date} />
            </div>
            <hr/>
            <h3>Event Location</h3>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="City" name="city" onChange={handleChange} value={this.state.city} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="State" name="state" onChange={handleChange} value={this.state.state} />
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
)(CreateEvent);
