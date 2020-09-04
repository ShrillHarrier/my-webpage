import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class ProjectCard extends Component{
	constructor(props) {
	    super();
	    this.state = {
	      }
	}

	render() {
		return(
			<Card className="bg-light border-light text-dark projectcard">
				<Card.Body>
					<Card.Title><b>{this.props.name}</b></Card.Title>
					<img id="cardimg" src={this.props.img}></img>
					<Card.Text>
						{this.props.info}
					</Card.Text>
					<div>{this.renderbutton}</div>
					<Button variant = "dark" href={this.props.link}>View On Github</Button>
					<div id="cardmargin"><b>Used:</b> {this.props.tools}</div>
				</Card.Body>
			</Card>
		)
	}
}

export default ProjectCard;