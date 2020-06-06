import React, {Component} from 'react';
import CustomParticle from './customparticle';
import './style.css';

function Page(){
	return(
		<section id = 'homepage'>
			<CustomParticle/>

	         <div class = 'pagecut headerdiv'>
	            <h1>Matthew's Personal Site</h1>
	         </div>

	         <CustomParticle/>

        </section>
	)
}

export default Page;