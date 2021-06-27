import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { render } from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { BrowserRouter as Routing, Switch, Route } from "react-router-dom";
import Form_mail from "./form";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

class ButtonAppBar extends Component {
	render() {
		const styling = this.props;
		// const { classes } = this.props;
		return (
			<Routing>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={styling.menuButton}
							color="inherit"
							aria-label="menu"
						>
							{/* <MenuIcon /> */}
						</IconButton>
						<Typography variant="h6" className={styling.title}>
							The Developers
						</Typography>
						<Route path="/form" component={Form_mail}>
							<Button color="inherit" position="right">
								Form
							</Button>
						</Route>
						<Button color="inherit" position="right">
							Login
						</Button>
						<Button color="inherit" position="right">
							Login
						</Button>
					</Toolbar>
				</AppBar>
			</Routing>
		);
	}
}

ButtonAppBar.propTypes = {
	styling: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ButtonAppBar);
