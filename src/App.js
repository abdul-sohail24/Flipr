import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import Signup from "./signup";
import Google_login from "./google_login";
import ButtonAppBar from "./Appbar.js";
import Mail_Listing from "./list.js";
import Form_mail from "./form.js";
import Mail_Box from "./mail_box";
import Navbar from "./Nav";
import Login_page from "./login";
import { BrowserRouter as Routing, Switch, Route } from "react-router-dom";
import History_Listing from "./history";
import "./App.css";

export class App extends Component {
	render() {
		return (
			<Routing>
				<div>
					<Navbar />
					<Switch>
						{/* <Route path="/" exact component={Home} /> */}
						{/* Mail_Box */}
						<Route path="/mail_box" component={Mail_Box} />
						{/* Mail_Listing */}
						<Route path="/list" component={Mail_Listing} />
						{/* Form_mail */}
						<Route path="/form" component={Form_mail} />
						{/* Signup */}
						<Route path="/signup" component={Signup} />
						{/* Login Page */}
						<Route path="/login" component={Login_page} />
						{/* History */}
						<Route path="/history" component={History_Listing} />
						{/* Home */}
					</Switch>
				</div>
			</Routing>
		);
	}
}

// const Home = () => {
// 	<div>
// 		<h2>Home</h2>
// 	</div>;
// };

export default App;
