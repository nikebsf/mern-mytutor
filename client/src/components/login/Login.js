import React from "react";
import "./Login.scss";

import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="login">
			<div className="login-container">
				<div className="container-title">Login</div>
				<div className="container-form">
					<form action="">
						<div className="container-input">
							<input type="text" placeholder="E-mail" />
						</div>
						<div className="container-input">
							<input type="password" placeholder="Password" />
						</div>
						<div className="container-input btn-sq">
							<input type="submit" className="btn-submit" />
						</div>
					</form>
					<div className="container-link">
					Don't have an account?
						{/* <link to="/signup">
							Don't have an account?
						</link>	 */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
