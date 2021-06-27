import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
	const navigationstyle = {
		color: "black",
	};

	return (
		<nav class="home_nav">
			{/* <h3>Developers</h3> */}
			<ul>
				<Link style={navigationstyle} to="/form">
					<li>Form</li>
				</Link>
				<Link style={navigationstyle} to="/mail_box">
					<li>Mail_box</li>
				</Link>
				<Link style={navigationstyle} to="/list">
					<li>List</li>
				</Link>
				<Link style={navigationstyle} to="/signup">
					<li>Signup</li>
				</Link>
				<Link style={navigationstyle} to="/login">
					<li>Login</li>
				</Link>
				<Link style={navigationstyle} to="/history">
					<li>History</li>
				</Link>
				<Link style={navigationstyle} to="/list">
					Home
				</Link>
			</ul>
		</nav>
	);
}

export default Navbar;
