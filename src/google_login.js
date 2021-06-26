import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "./App.css";
import { Button } from "@material-ui/core";

function Google_login() {
	const responseGoogle = (response) => {
		console.log(response);
		console.log(response.profileObj);
	};

	return (
		<GoogleLogin
			clientId="311711109146-2077d150dprtuhn34rq2mqutmen95ppi.apps.googleusercontent.com"
			render={(renderProps) => (
				<div class="button_outline">
					<Button
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
						class="login_button"
						variant="contained"
						color="primary"
					>
						Login with Google
					</Button>
				</div>
			)}
			buttonText="Login"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
			cookiePolicy={"single_host_origin"}
		/>
	);
}

export default Google_login;
