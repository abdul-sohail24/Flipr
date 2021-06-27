import React, { useState } from "react";
import { TextField, Input, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Google_login from "./google_login";

const Login_page = () => {
	const [registerPerson, setRegisterPerson] = useState({
		email: "",
		password: "",
	});

	// const [records, setRecords] = useState([]);

	const handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);

		setRegisterPerson({ ...registerPerson, [name]: value });
	};

	const handleUserSubmit = (e) => {
		e.preventDefault();

		// const newRecord = {
		// 	...registerPerson,
		// 	id: new Date().getTime().toString(),
		// };
		// setRecords([...records, newRecord]);
		console.log(registerPerson);
	};

	return (
		<section class="form_temp">
			<Google_login />
			<div class="login_text">
				<h3>
					<Link to={"/signup"}> Signup </Link>
				</h3>
			</div>
			<div class="or_text">
				<h3>OR</h3>
			</div>
			<div class="sign_text">
				<h2>Login</h2>
			</div>
			<form action="" onSubmit={handleUserSubmit} noValidate autoComplete="off">
				<div>
					{/* <label htmlFor="EmailId">Email ID: </label> */}
					<TextField
						id="outlined-basic"
						label="Enter Email id"
						variant="outlined"
						type="email"
						value={registerPerson.email}
						onChange={handleUserInput}
						name="email"
						id="mail"
						size="small"
					/>
				</div>
				<br />
				<div>
					{/* <label htmlFor="password">Password: </label> */}
					<TextField
						id="outlined-basic"
						label="Password"
						variant="outlined"
						type="password"
						autoComplete="off"
						value={registerPerson.password}
						onChange={handleUserInput}
						name="password"
						id="password"
						size="small"
					/>
				</div>
				<br />
				<Link to="/list">
					<Button
						type="submit"
						id="submit_button"
						variant="contained"
						color="secondary"
					>
						Submit
					</Button>
				</Link>
			</form>
		</section>
	);
};

export default Login_page;
