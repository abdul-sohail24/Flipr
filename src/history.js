import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const History_Listing = () => {
	return (
		<>
			<ListGroup>
				<ListGroup.Item>
					<Link to="/mail_box">
						<Row xs={12}>
							<Col xs={2}>Roland Dagget</Col>
							<Col xs={2}>
								<p>Lorem ipsum dolor sit amet.</p>
							</Col>
							<Col xs={6}>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Consequuntur at ullam, pariatur aliquam nihil libero deserunt
									commodi dolores reprehenderit quidem.
								</p>
							</Col>
						</Row>
					</Link>
				</ListGroup.Item>
				<ListGroup.Item>
					<Row xs={12}>
						<Col xs={2}>
							<a href="">Jim Gordon</a>
						</Col>
						<Col xs={2}>
							<p>Lorem ipsum dolor sit amet.</p>
						</Col>
						<Col xs={6}>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Consequuntur at ullam, pariatur aliquam nihil libero deserunt
								commodi dolores reprehenderit quidem.
							</p>
						</Col>
					</Row>
				</ListGroup.Item>
				<ListGroup.Item>
					<Row xs={12}>
						<Col xs={2}>
							<a href="">Dick Grayson</a>
						</Col>
						<Col xs={2}>
							<p>Lorem ipsum dolor sit amet.</p>
						</Col>
						<Col xs={6}>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Consequuntur at ullam, pariatur aliquam nihil libero deserunt
								commodi dolores reprehenderit quidem.
							</p>
						</Col>
					</Row>
				</ListGroup.Item>
			</ListGroup>
		</>
	);
};

export default History_Listing;
