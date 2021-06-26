import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import "./App.css";

const Mail_Box = () => {
	return (
		<>
			<Container>
				<Row>
					<Col xs={12}>
						<section class="mail_box">
							<h3>Flipr hackathon</h3>
							<hr id="mail_heading" />
							<h4>Lohith Reddy</h4>
							<hr id="mail_name" />
							<h5>Subject</h5>
							<hr id="subject" />
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
								exercitationem atque ad animi beatae ex veritatis accusantium.
								Numquam et fugiat atque nulla labore repudiandae sint quia
								recusandae dolore, inventore dicta in, at aut doloribus ex
								tempore, facere earum quod quae possimus aspernatur minima
								maiores iste voluptas. Iure autem cupiditate praesentium totam
								inventore perferendis, qui illum distinctio earum, aperiam
								similique optio maiores explicabo veniam ullam fugiat
								consectetur esse, accusamus sunt quo! Ea ipsa est porro dolore
								officia odit tempora? Commodi quis a illum odio, eaque tenetur
								molestiae corrupti vitae doloribus? Sint, distinctio
								consequuntur minus nostrum aliquam quidem nemo voluptatibus
								vitae maxime.
							</p>
						</section>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Mail_Box;
