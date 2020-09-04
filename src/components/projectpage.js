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
				<ProjectCard 
				name = "Picnic Ability"
				img="https://developer.apple.com/design/human-interface-guidelines/accessibility/images/accessibility-icon_2x.png"
				info="A website dedicated to helping people with accessibility issues find convenient travel destinations."
				link="https://github.com/ShrillHarrier/picnic-ability"
				tools="ReactJS, NodeJS, PostgreSQL"/>
				<ProjectCard
				name = "Turret Warfare"
				img="https://github.com/ShrillHarrier/Turret-Warfare/blob/master/images/PlaneSprite.png?raw=true"
				info="A top-down turret defense game with a military theme made using the Unity engine."
				link="https://github.com/ShrillHarrier/Turret-Warfare"
				tools="Unity2D, C#, Google Drawings"/>
			</div>
			<div className = "carddiv">
				<ProjectCard 
					name = "This Webpage"
					img="https://static.vecteezy.com/system/resources/thumbnails/000/440/918/small/Seo_15-30__28463_29.jpg"
					info="My personal page detailing my education, projects and contact information."
					link="https://github.com/ShrillHarrier/my-webpage"
					tools="ReactJS, CSS, BootStrap4"/>
					<ProjectCard 
					name = "Scribble App"
					img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32e5f5fd-88dd-4409-b61d-d364a6346d8a/dbjsw33-cce51e46-f2c8-4e8b-b450-fcdf4a4c95a6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzJlNWY1ZmQtODhkZC00NDA5LWI2MWQtZDM2NGE2MzQ2ZDhhXC9kYmpzdzMzLWNjZTUxZTQ2LWYyYzgtNGU4Yi1iNDUwLWZjZGY0YTRjOTVhNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.CKJ3nn4roJO1fNG4CDJJRNL2kvFpyT-4Ja7WSxftjYM"
					info="A software application that allows users to draw detailed mock-ups and sketches."
					link="https://github.com/ShrillHarrier/Scribble-App"
					tools="Python3, Tkinter Lybrary"/>
			</div>
		</div>
		);
}

export default Page;