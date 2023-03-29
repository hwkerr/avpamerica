import './AVPNavbar.css';
import AVPLogo from '../AVPLogo';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_USER = {
    first: "Harrison",
    last: "Kerr"
};

function AVPNavbar() {
    const [user, setUser] = useState(DEFAULT_USER);

    const getLoginText = () => {
        return user ? (
            <React.Fragment>
                Logged in as <a href="#user">{user.first}</a> | <a href="#logout" onClick={() => setUser(null)}>Not {user.first}? Log out!</a>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <a href="#login" onClick={() => setUser(DEFAULT_USER)}>Log in!</a>
            </React.Fragment>
        )
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/" className="avp-logo">
                            <AVPLogo width={100} height={50}/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Text>
                        {getLoginText()}
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}

export default AVPNavbar;