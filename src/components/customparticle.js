import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './style.css';

function Custom(amount){

	var w = window.innerWidth;
	var h = window.innerHeight;
	var amount = 60;

	if(w < 600 || h < 900){
		amount = 30;
	}

	console.log(amount);

	return(
		<div class = 'pagecut'>
			<Particles
    			params={{
	    			"particles": {
	        			"number": {
	            			"value":amount
	        			},
	        			"color": {
	        				"value":"#E6D8D8"
	        			},
	        			"size": {
	            			"value": 4,
	           			    "random": false
	        			},
	        			"opacity":{
	        				"value": 1
	        				}

	    			},
	    			"interactivity": {
	        			"events": {
	            			"onhover": {
		                		"enable": true,
		                		"mode": "repulse"
	            			}
	        			}
	    			}
				}} />
	    </div>
	)
}

export default Custom;