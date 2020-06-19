import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Page(){
	return(
		<Card className="projectcard">
			<Card.Body>
				<Card.Title><b>Coming Soon</b></Card.Title>
				<Card.Text>
					Check back soon for information on my projects.
				</Card.Text>
				{/*<Button variant="primary">Go somewhere</Button>*/}
			</Card.Body>
		</Card>
	)
}

export default Page;