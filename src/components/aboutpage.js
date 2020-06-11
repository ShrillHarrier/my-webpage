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

				{/*<Jumbotron id = "infotron">
					<p><b>Langauges:</b> Java, Javascript, Python, C++, C#<br></br><b>Tools:</b> HTML/CSS, Unity, ReactJS, BootStrap4</p>
				</Jumbotron>*/}
		</div>
	)
}

export default Page;