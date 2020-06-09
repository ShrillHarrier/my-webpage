import React, {Component} from 'react';
import CustomParticle from './customparticle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
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
	         </div>

	         <CustomParticle/>
        </div>
	)
}

export default Page;