import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { TextField } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Form, Button } from "react-bootstrap";
import "./App.css";

const Form_mail = () => {
	return (
		<>
			<Container>
				<Form>
					{/* Email Id To */}
					<Form.Group controlId="">
						<Form.Label>To</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Email Address"
							required
						/>
					</Form.Group>

					{/* Email Id CC */}
					<Form.Group controlId="">
						<Form.Label>CC</Form.Label>
						<Form.Control
							type="email"
							// placeholder="Enter Sender's Email Address"
						/>
					</Form.Group>

					{/* Subject */}
					<Form.Group controlId="">
						<Form.Label>Subject</Form.Label>
						<Form.Control type="textarea" />
					</Form.Group>

					{/* Schedule Selector */}
					{/* Dropdown */}
					<Form.Group controlId="">
						<Form.Label>Schedule</Form.Label>
						<Form.Control as="select" dropdown>
							<option>Recurring schedule</option>
							<option>Weekly schedule</option>
							<option>Monthly schedule</option>
							<option>Yearly schedule</option>
						</Form.Control>
					</Form.Group>
					{/* Time Picker */}

					{/* Mail Body */}
					<Form.Group controlId="">
						<Form.Label>Body</Form.Label>
						<Form.Control as="textarea" rows={5} />
					</Form.Group>

					{/*  */}
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		</>
	);
};

export default Form_mail;
