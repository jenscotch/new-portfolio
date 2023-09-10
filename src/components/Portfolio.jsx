import React from 'react';
import './Portfolio.css';
import movie from '../assets/movie-app.png';
import chat from '../assets/chat.png';
import meet from '../assets/meet.png';
import study from '../assets/case-study.pdf';


function reveal() {
    const reveals = document.querySelectorAll('.fade-in');

    for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);

const Portfolio = () => {

    return (
    <div className="project-container fade-in">
        <div className="project-card">
		<div className="project-wrapper">
            <div className="project-body">
                <h4 className="project-name">
                <a className="btn" alt="project button" href="https://jensmovieapp.netlify.app/" style={{fontSize: "24px", fontWeight: "bold"}}>Movie App</a>
                </h4>
                <p className="project-detail">A Movie App built using the MERN stack, that allows a user 
                to sign-up for an account, log into said account, and add movies to their account. Users can also 
                find out more information about movies, directors, and genres. Movie list provided from a list of 
                movies generated from a self-built API.</p>
                <h5>Technologies</h5>
                <p className="project-detail">React, SASS, Bootstrap</p>
            </div>
			<div className="project-image-wrapper">
                <a href="https://github.com/jenscotch/myFlix-client">
				    <img class="project-image" src={movie} alt="movie app" />
                </a>
			</div>
        </div>
        </div>



        <div className="project-container fade-in">
			<div className="project-card">
            <div className="project-wrapper">
                <div className="project-body">
                <h4 className="project-name">
                    <a className="btn" alt="project button" href="https://github.com/jenscotch/chat-app" style={{fontSize: "24px", fontWeight: "bold"}}>Chat App</a>
                </h4>
                <p className="project-detail">A Chat App built with React Native that uses Google Firestore to store chat details.
                Users have the ability to share images and their location once in the chat.</p>
                <h5>Technologies</h5>
                <p className="project-detail">React Native, Google Firestore Database, Expo, Android Studio</p>
                </div>
            <div className="project-image-wrapper">
                <a href="https://github.com/jenscotch/chat-app">
				    <img className="project-image" src={chat} alt="chat app"/>
                </a>
            </div>
            </div>
            </div>
        </div>



        <div className="project-container fade-in">
            <div className="project-card">
                <div className="project-wrapper">
                    <div className="project-body">
                <h4 className="project-name">
                    <a className="btn" alt="project button" href="https://jenscotch.github.io/meet/" style={{fontSize: "24px", fontWeight: "bold"}}>Meet App</a>
                </h4> 
                <p className="project-detail">Meet is a progressive web app with mobile capabilities, 
                    developed using a test-driven development technique in React. 
                    The app uses the Google Calendar API to fetch upcoming events, as well as Google Authentication to log in. 
                    Users can filter events based on location and/or number of events.</p>
                <h5>Technologies</h5>
                <p className="project-detail">React, AWS Lambda, Google Authentication</p>
                <a className="btn" href={study} style={{fontSize: "16px"}}>CASE STUDY</a>
            </div>
			<div className="project-image-wrapper">
                <a href="https://github.com/jenscotch/meet">
				<img className="project-image" src={meet} alt="meet app"/>
                </a>
            </div>
            </div>
            </div>
		</div>
        <br/>
        <br/>
        </div>
    )
};

export default Portfolio;