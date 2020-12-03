import React, { Component } from 'react';
import userStyles from '../Utils/userStyles';

export default class Register extends Component {
	render() {
		return (
			<div>
				<form style={userStyles}>
					<div style={{ margin: '20px' }}>
						<h3>Personal Info</h3>
						<div className="form-group">
							<input type="text" className="form-control" id="firstName" placeholder="First Name" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="lastName" placeholder="Last Name" />
						</div>
						{/* <div className="form-group">
							<input type="date" className="form-control" id="DOB" placeholder="Date of Birth" />
						</div> */}
						<hr></hr>
						<h3>Contact Info</h3>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="phoneNumber"
								placeholder="Phone Number"
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								id="email"
								autoComplete="email"
								placeholder="Email"
							/>
						</div>
						<hr></hr>
						<h3>Create a Password</h3>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								id="password"
								autoComplete="current-password"
								placeholder="Password"
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
