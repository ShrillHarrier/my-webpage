import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './style.css';

function Custom(){
	return(
		<div class = 'pagecut'>
				<Particles
	              params={{
	            		particles: {
	            			color: '#FF0000'
	            			density: 5;	            		}
	            	}}
	              style={{
	              }}
	              />
	    </div>
	)
}

export default Custom;