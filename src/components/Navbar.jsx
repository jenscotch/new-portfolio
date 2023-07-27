import React, { useRef } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav, Container} from 'react-bootstrap';
import logo from '../icons/favicon.png';
import { Link } from 'react-router-dom';



const Navigation = () => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current.scrollIntoView({ behavior: 'smooth'});
      };

    
    
    return (
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="my logo" style={{ width: 40, height: 40, padding: 1 }} />
                    </Navbar.Brand>
                    
                    <Nav className="ml-auto flex-row-3">
                        <Nav.Link as={Link} to="/" ref={ref}>
                            <div onClick={handleClick}>Home</div>    
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" ref={ref}>
                            <div onClick={handleClick}>About</div>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/portfolio" ref={ref}>
                            <div onClick={handleClick}>Work</div>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" ref={ref}>
                            <div onClick={handleClick}>Contact</div>
                        </Nav.Link>
                    </Nav>
                    
                </Container>
            </Navbar>
    )
};

export default Navigation;

