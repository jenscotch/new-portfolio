import React from 'react';
import './AboutMe.css';


const AboutMe = () => {
    return (
        <div name="portfolio" className="h-screen w-full bg-[#33032f]">
        <div className="flex flex-col items-center justify-center h-full ">
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="bg">
                <i className="devicon-angularjs-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-github-original"></i>
            </div>
            <div className="bg">
                <i className="devicon-heroku-original"></i>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-jquery-plain"></i>
            </div>
            <div className="bg">
                <i className="devicon-mongodb-plain"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-npm-original-wordmark"></i>
                <i className="devicon-postgresql-plain"></i>
            </div>
            <div className="bg">
                <i className="devicon-python-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-vscode-plain"></i>
        </div>
        </div>
        </div>
        <br />
   
        </div>
    )
};

export default AboutMe;