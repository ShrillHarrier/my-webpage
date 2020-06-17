import React, {Component} from 'react';
import './style.css';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page(){
	return(
		<div id = "projectpage">
			<div className ="topdiv">
				<h1>My Projects</h1>
			</div>
			<div className = "carddiv">
				<Card className="projectcard">
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
					    <Card.Title>Card Title</Card.Title>
					    <Card.Text>
					      Some quick example text to build on the card title and make up the bulk of
					      the card's content.
					    </Card.Text>
					    <Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card className="projectcard">
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
					    <Card.Title>Card Title</Card.Title>
					    <Card.Text>
					      Some quick example text to build on the card title and make up the bulk of
					      the card's content.
					    </Card.Text>
					    <Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
			<div className = "carddiv">
				<Card className="projectcard">
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
					    <Card.Title>Card Title</Card.Title>
					    <Card.Text>
					      Some quick example text to build on the card title and make up the bulk of
					      the card's content.
					    </Card.Text>
					    <Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card className="projectcard">
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
					    <Card.Title>Card Title</Card.Title>
					    <Card.Text>
					      Some quick example text to build on the card title and make up the bulk of
					      the card's content.
					    </Card.Text>
					    <Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
		);
}

export default Page;