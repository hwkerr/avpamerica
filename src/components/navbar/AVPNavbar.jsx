import './AVPNavbar.css';
import AVPLogo from '../AVPLogo';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function AVPNavbar({user, onLoginDefault, onLogout}) {

    const getLoginText = () => {
        return user ? (
            <React.Fragment>
                Logged in as <Link to="/user">{user.first}</Link> | <a href="#logout" onClick={onLogout}>Not {user.first}? Log out!</a>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <a href="#login" onClick={onLoginDefault}>Log in!</a>
            </React.Fragment>
        )
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className="avp-logo">
                            <AVPLogo width={100} height={50}/>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/schedule">
                            <Nav.Link className="avp-link">Schedule</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/link">
                            <Nav.Link className="avp-link">Link</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text>
                        {getLoginText()}
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}

export default AVPNavbar;