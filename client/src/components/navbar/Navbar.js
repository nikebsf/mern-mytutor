import React from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
	const navStyle = {
		color: 'white',
		textDecoration : 'none'
	}
	return (
		<div className="navbar">
			<div className="navbar-container row w-100">
				<div className="navbar-logo col">
					<div className="navbar-logo-container">
						<Link to="/" style={navStyle}>
							<span>my</span>tutor
						</Link>
						
					</div>
				</div>
				<div className="navbar-links">
					<div className="navbar-link navbar-login btn btn-filled">
						<div className="navbar-login-container" >
							<Link to="/login" style={{textDecoration:'none'}}>
								Login
							</Link>
						</div>
					</div>
					<div className="navbar-link navbar-signup btn btn-filled">
						<div className="navbar-signup-container">
							<Link to="/signup" style={{textDecoration:'none'}}>
								Signup
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>

	

	);
};

export default Navbar;
