import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar className="py-3" bg="light" expand="lg">
                <Container> 
                    <NavLink to="/"><Image style={{height: '70px'}} src={Logo} alt="" fluid  /></NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="ms-auto my-2 my-lg-0 text-uppercase fw-bolder"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                    
                       
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;