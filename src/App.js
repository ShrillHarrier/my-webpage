import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import HomeSection from './components/homepage';
import NavBar from './components/navbar'


class App extends Component{
	constructor() {
	    super();
	    this.state = {
	      }
	}

	render() {
	    return(
	    	<header>
		      <NavBar/>
		      <HomeSection/>
		    </header>
	      )
	  }
}

export default App;
