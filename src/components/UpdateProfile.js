import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from '../redux/users'


class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    await this.props.getUser();
  }

  handleInputChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const user = this.props.user;
    
    return (

      <div style={{marginTop: "200px"}}>Hello world</div>)}}
        {/* <h1>
          Update Profile Information:{' '}</h1>
          {user.first_name}{user.last_name}
          </div>)}} */}
          
/* 
        </h1>
        <hr />
        <form onSubmit={() => { this.props.dispatchUpdateCostume(this.state.costumeId, { costumeName: this.state.costumeName }); }}>
          <label>
            Current Name:
            {'  '}
            {thisCostume.costumeName}
            <div>
              New Name:
              {'  '}
              <input
                name="costumeName"
                type="text"
                placeholder={this.costumeName}
                value={this.state.costumeName}
                onChange={this.handleInputChange}
              />
            </div>
            <input type="submit" value="Update" />
          </label>
        </form>
        <hr />

        <div>
        <form onSubmit={() => { this.props.dispatchUpdateCostume(this.state.costumeId, { price: this.state.price }); }}>
          <label>
            Current Price:
            {' '}
            {thisCostume.price}
            <div>
              New Price:
              {'  '}
              <input
                name="price"
                type="number"
                value={this.state.price}
                onChange={this.handleInputChange}
              />
            </div>
            <input type="submit" value="Update" />
          </label>
        </form>
        </div>

        <hr />

        <div>
        <form onSubmit={() => { this.props.dispatchUpdateCostume(this.state.costumeId, { imageUrl: this.state.imageUrl }); }}>
          <label>
            Current ImageUrl:
            {' '}
            {' '}
            {thisCostume.imageUrl}
            <div>
              New Image Url:
              {'  '}
              <input
                name="imageUrl"
                type="text"
                value={this.state.imageUrl}
                onChange={this.handleInputChange}
              />
            </div>
            <input type="submit" value="Update" />
          </label>
        </form>
        </div>
        <hr />

        <div>
        <form onSubmit={() => { this.props.dispatchUpdateCostume(this.state.costumeId, { quantity: parseInt(this.state.quantity, 10) }); }}>
          <label>
            Current Quantity:
            {' '}
            {' '}
            {thisCostume.quantity}
            <div>
              New Quantity:
              {'  '}
              <input
                name="quantity"
                type="text"
                value={this.state.quantity}
                onChange={this.handleInputChange}
              />
            </div>
            <input type="submit" value="Update" />
          </label>
        </form>
        </div>
        <hr />

        <div>
        <form onSubmit={() => { this.props.dispatchUpdateCostume(this.state.costumeId, { categoryId: this.state.categoryId }); }}>
          <label>
            Current Category:
            {' '}
            {' '}
            {thisCategory ? thisCategory.title : null}
            <div>
              New Category:

              <select
                name="categoryId"
                value={this.state.categoryId}
                onChange={this.handleInputChange}
              >
                <option>--Update Category--</option>
                {!!categories && categories
                  .map((category) => (
                    <option key={category.title} value={category.id}>
                      {category.title}
                    </option>
                  ))}
              </select>
            </div>
            <input type="submit" value="Update" />
          </label>
        </form>
        </div>
        <hr />
      </div> */
    /* );
  }
} */

const mapStateToProps = (state) => ({
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
