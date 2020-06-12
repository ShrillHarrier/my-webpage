import React, {Component} from 'react';
import CustomParticle from './customparticle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Button} from 'react-bootstrap';
import './style.css';

function Page(){
	return(
		<div id = "aboutpage">
				<Jumbotron id = "infotron">
					<h><b>Welcome!</b></h>
					<p>My name is Matthew Panizza. I am a Computer Engineering student at the University of Waterloo.</p>
		            <p>Currently, I am focusing on learning: <b>Fullstack</b> Development, <b>Software</b> Development, and <b>Game</b> Development.</p>
		            <div className = "custombreak"></div>
		            <p><b>Langauges:</b> Java, Javascript, Python, C++, C#<br></br><b>Tools:</b> HTML/CSS, Unity, ReactJS, BootStrap4</p>
				</Jumbotron>
				<div className="flexdiv">
					<a href="http://www.uwaterloo.ca/engineering"><img className = "aboutimg" src = "https://www.brocksolutions.com/wp-content/uploads/2020/02/University-of-Waterloo-1080x675.jpg"></img></a>
					<a href="http://www.uwaterloo.ca/engineering"><img className = "aboutimg" src = "https://www.brocksolutions.com/wp-content/uploads/2020/02/University-of-Waterloo-1080x675.jpg"></img></a>
					<a href="http://www.uwaterloo.ca/engineering"><img className = "aboutimg" src = "https://www.brocksolutions.com/wp-content/uploads/2020/02/University-of-Waterloo-1080x675.jpg"></img></a>
					<a href="http://www.uwaterloo.ca/engineering"><img className = "aboutimg" src = "https://www.brocksolutions.com/wp-content/uploads/2020/02/University-of-Waterloo-1080x675.jpg"></img></a>
					<a href="http://www.uwaterloo.ca/engineering"><img className = "aboutimg" src = "https://www.brocksolutions.com/wp-content/uploads/2020/02/University-of-Waterloo-1080x675.jpg"></img></a>
				</div>
				{/*<Jumbotron id = "infotron">
					<p><b>Langauges:</b> Java, Javascript, Python, C++, C#<br></br><b>Tools:</b> HTML/CSS, Unity, ReactJS, BootStrap4</p>
				</Jumbotron>*/}
		</div>
	)
}

export default Page;