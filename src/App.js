import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Github from './icons/icons8-github.svg';
import LinkedIn from './icons/icons8-linkedin.svg';

function App() {

  const [state, setState] = useState({ items: []});
  const [extraComponents] = useState([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);


  const fetchMoreData = () => {
    if (state.items.length >= 5) {
      setHasMore(false);
      return;
    }
    //console.log('extraC', extraComponents[count]);
    setTimeout(() => {
      setState({
        items: state.items.concat([extraComponents[count]])
      });
      setCount(count + 1);
    }, 500);
  };

  return (
    <div>
      <BrowserRouter>
        <div>
      <Navigation />
      <header className="App-header" style={{ backgroundColor: "#33032f"}}>
        <Home />
        <Portfolio />
        <AboutMe />
        <Contact />
        <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p className="flex">
                    <a href= "https://github.com/jenscotch">
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/jennifer-scott-84543a1b6/">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
            </p>
          }
          >
            {state.items.map((i, index) => i)}
          </InfiniteScroll>
      </header>
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
