import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import Signup from "./signup";
import Google_login from "./google_login";
import ButtonAppBar from "./Appbar.js";
import Mail_Listing from "./list.js";
import Form_mail from "./form.js";
import "./App.css";

export class App extends Component {
	render() {
		return (
			<div>
				<ButtonAppBar />
				<Mail_Listing />
				{/* <Form_mail /> */}
				{/* <Signup /> */}
				{/* <Google_login /> */}
			</div>
		);
	}
}

export default App;
