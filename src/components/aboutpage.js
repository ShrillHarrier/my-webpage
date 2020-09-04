import React, {Component} from 'react';
import CustomParticle from './customparticle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Button, Card, Form} from 'react-bootstrap';
import './style.css';

function Page(){
	return(
		<div id = "aboutpage">
			<Jumbotron id = "infotron">
				<h><b>Welcome!</b></h>
				<p>My name is Matthew Panizza. I am a <b>2A Computer Engineering</b> student at the University of Waterloo.</p>
			    <p>Currently, I am focusing on learning: <b>Fullstack</b> Development, <b>Software</b> Development, and <b>Game</b> Development.</p>
				<div className = "custombreak"></div>
				<p><b>Langauges:</b> Java, Javascript, Python, SQL, C++, C#<br></br><b>Tools:</b> HTML/CSS, ReactJS, NodeJS, BootStrap4, Unity, Postman</p>
		    </Jumbotron>
			<div className="flexdiv" id = "aboutborder">
				<Card>
					<a href="http://www.uwaterloo.ca/engineering"><img className = "aboutimg" src = "https://www.brocksolutions.com/wp-content/uploads/2020/02/University-of-Waterloo-1080x675.jpg"></img></a>
					<a href="https://www.callofduty.com/home"><img className = "aboutimg" src = "https://i.pinimg.com/474x/57/8f/e1/578fe1e9ac57a62efbf8a746cd4e1aa5.jpg"></img></a>
					<a href="http://www.java.com"><img className = "aboutimg" src = "https://miro.medium.com/max/4000/1*_FFpkCWD-KwQmc7oevCRBQ.jpeg"></img></a>						<a href="https://wiki.python.org/moin/TkInter"><img className = "aboutimg" src = "https://learnbatta.com/assets/images/python/python-logo.png"></img></a>
					<a href="https://github.com/facebook/react"><img className = "aboutimg" src = "https://www.c-sharpcorner.com/article/what-and-why-reactjs/Images/image001.jpg"></img></a>
				</Card>
			</div>
		</div>
	)
}

export default Page;