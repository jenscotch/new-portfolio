import React from 'react';
import './Portfolio.css';
import movie from '../assets/movie-app.png';
import pokemon from '../assets/pokemon.png';
import meet from '../assets/meet.png';


const Portfolio = () => {

    return (

        <div className="projects-container">
		<div className="projects-grid1">
            <div className="projects-text">
                <h4 className="text-h4">
                <a className="btn" href="https://github.com/jenscotch/myFlix-client" style={{fontSize: "24px", fontWeight: "bold"}}>Movie App</a>
                </h4>
                <br />
                <p>A Movie App built with React that allows a user to sign-up for an account, log into said account, and add movies to their account from a list of movies generated from a self-built API.</p>
            </div>
			<div className="project-image-wrapper">
                <a href="https://github.com/jenscotch/myFlix-client">
				    <img class="project-image" src={movie} alt="movie app" />
                </a>
			</div>
        </div>
        <div className="projects-grid2">
			<div className="project-image-wrapper">
                <a href="https://github.com/jenscotch/pokemon-app">
				    <img className="project-image" src={pokemon} alt="pokemon app"/>
                </a>
            </div>
            <div className="projects-text">
                <h4 className="text-h4">
                    <a className="btn" href="https://github.com/jenscotch/pokemon-app" style={{fontSize: "24px", fontWeight: "bold"}}>Pokedex App</a>
                </h4>
                <br />
                <p>A Pokedex App built mostly with JavaScript that utilizes a Pokemon API to gather information about various Pokemon.</p>
            </div>
        </div>
        <div className="projects-grid3">
            <div className="projects-text">
                <h4 className="text-h4">
                    <a className="btn" href="https://github.com/jenscotch/meet" style={{fontSize: "24px", fontWeight: "bold"}}>Meet App</a>
                </h4>
                <br />
                <p>An app built with React using test-driven development to fetch events from the Google Calendar API. The user can sign in using Google authentication, find events in a specific city, choose the number of events they want to see, and see two different types of data graphs based off of their filtered choices.</p>
            </div>
			<div className="project-image-wrapper">
                <a href="https://github.com/jenscotch/meet">
				<img className="project-image" src={meet} alt="meet app"/>
                </a>
            </div>
		</div>
        <br/>
        <br/>
        </div>
    )
};

export default Portfolio;