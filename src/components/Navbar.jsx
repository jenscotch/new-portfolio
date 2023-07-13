import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav, Container} from 'react-bootstrap';
import logo from '../icons/favicon.png';
import resume from '../jennifer-scott-2023.pdf';


const Navigation = () => {
    
    return (
            <Navbar className="bg-[#fee1c7]" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="my logo" style={{ width: 30, height: 30 }} />
                    </Navbar.Brand>
                    
                    <Nav className="m-auto flex-row-3" >
                        <Nav.Link href="https://github.com/jenscotch">Github</Nav.Link>
                        <Nav.Link href={resume}>Resume</Nav.Link>
                        <Nav.Link href="mailto:jennifer.scott9@yahoo.com">Email</Nav.Link>
                    </Nav>
                  
                </Container>
            </Navbar>
    )
};

export default Navigation;

