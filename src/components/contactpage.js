import React, {Component} from 'react';
import './style.css';
import {Card, Button, Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page(){
	return(
		<div id="contactpage">
			<div className="topdiv">
				<h1>Contact Me</h1>
			</div>

			<div className="flexdiv">
				<Jumbotron id ="contacttron">
					<p>Email: <a href="mpanizza@uwaterloo.ca">mpanizza@uwaterloo.ca</a></p>
					<p>Phone: <a id="phone">+1 901-301-3601</a></p>
					<p>Github: <a href="https://www.github.com/shrillharrier">View My Github</a></p>
					<p>Linkedin: <a href="https://www.linkedin.com/in/matthew-panizza-b726a0191/">View My Linkedin</a></p>
				</Jumbotron>
			</div>
		</div>
		);
}

export default Page;