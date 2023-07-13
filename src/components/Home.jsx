import React from 'react';
import './Home.css';

const Home = () => {
    
    return (
        <div name="home" className="flex-wrap h-screen w-full" style={{background: "#33032f"}}>
            <div className="container">
                <div className="name">
                    <h1 className="name-one">Jennifer </h1>
                </div>
                <br />
                <div className="name">
                    <h1 className="name-two">Lani</h1>
                </div>
                <br />
                <div className="name">
                    <h1 className="name-three">Scott</h1>
                </div>
                </div>
        <div name="home" className="flex-wrap h-screen w-full" style={{background: "#33032f"}}>
            <div className="px-4">
                <h5 className="paragraph">
                    Hello, world! <br/> 
                    <b>My name is Jennifer Scott.</b> <br/><br/>
                    I am a Full Stack Web Developer with professional design experience.
                    <br/><br/>
                    <a className="btn" href="https://github.com/jenscotch" style={{fontSize: "18px", color: "#fee1c7"}}>My code :)</a>
                </h5>
            </div>
            </div>
        </div>
    )
};

export default Home;