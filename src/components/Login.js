import React, { Component } from 'react';

export default class Login extends Component {
	render() {
		return <div>This will be the login page :)</div>;
	}
}
import React, { Component } from 'react';
import userStyles from '../Utils/userStyles';

export default class Login extends Component {
	render() {
		return (
			<div>
				<form style={userStyles}>
					<div style={{ margin: '20px' }}>
						<h3>Login to VolunteerIn</h3>
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								id="email"
								autoComplete="email"
								placeholder="Email address"
							/>
						</div>
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
