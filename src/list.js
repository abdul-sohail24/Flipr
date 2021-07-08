import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mail_Listing = () => {
	return (
		<>
			<ListGroup>
				<ListGroup.Item>
					<Link to="/mail_box">
						<Row xs={12}>
							<Col xs={2}>Barbara Gordon</Col>
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
							<a href="">Steve Trevor</a>
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
							<a href="">Bruce Wayne</a>
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
							<a href="">Selina Kyle</a>
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
							<a href="">Barry Allen</a>
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

export default Mail_Listing;
