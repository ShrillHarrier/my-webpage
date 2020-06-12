import React, {Component} from 'react';
import CustomParticle from './customparticle';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Page(){
	return(
		<div id = "homepage">
			<CustomParticle/>

	         <div className = "pagecut headerdiv">
	            <h1>Matthew Panizza</h1>
	            <h2>Software Developer | Game Developer | Fullstack Developer</h2>
	            <hr id = "buttonline"></hr>
	            <Button href = "#aboutpage" id="about">About</Button>
	        	{/*add git, linken, resume links here*/}
	         </div>

	         <CustomParticle/>
        </div>
	)
}

function scrollto(){

}

export default Page;