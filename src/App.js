import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import HomeSection from './components/homepage';
import AboutSection from './components/aboutpage';
import ProjectSection from './components/projectpage';
import ContactSection from './components/contactpage'
import NavBar from './components/navbar';

class App extends Component{
	constructor() {
	    super();
	    this.state = {
	      }
	}

	render() {
	    return(
	    	<body>
		    	<header>
			      <NavBar/>
		    	</header>

		    	<section>
		    		<HomeSection/>
		    	</section>

			    <section>
			    	<AboutSection/>
			    </section>

			    <section>
			    	<ProjectSection/>
			    </section>

			    <section>
			    	<ContactSection/>
			    </section>

			    <footer>
			    </footer>
			</body>
	      )
	  }
}

export default App;
