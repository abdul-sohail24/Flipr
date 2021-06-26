import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

const Mail_Listing = () => {
	return (
		<>
			<ListGroup>
				<ListGroup.Item>
					<div>
						<div class="col-lg-3">
							<a href="">Mail 1</a>
						</div>
						<div class="col-lg-9">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Tempora, iusto!
							</p>
						</div>
					</div>
				</ListGroup.Item>
				<ListGroup.Item>
					<a href="">Mail 2</a>
				</ListGroup.Item>
				<ListGroup.Item>
					<a href="">Mail 3</a>
				</ListGroup.Item>
				<ListGroup.Item>
					<a href="">Mail 4</a>
				</ListGroup.Item>
			</ListGroup>
		</>
	);
};

export default Mail_Listing;
