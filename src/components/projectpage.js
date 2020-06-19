import React, {Component} from 'react';
import './style.css';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectCard from './projectcard';

function Page(){
	return(
		<div id = "projectpage">
			<div className ="topdiv">
				<h1>My Projects</h1>
			</div>
			<div className = "carddiv">
				<ProjectCard/>
				<ProjectCard/>
			</div>
			<div className = "carddiv">
				<ProjectCard/>
				<ProjectCard/>
			</div>
		</div>
		);
}

export default Page;