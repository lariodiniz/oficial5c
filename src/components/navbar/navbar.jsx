import React from 'react'
import './navbar.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import icone from '../../assets/imgs/icons/icon.png'

const navbar = (props) => {
        
        return (
            <Navbar expand="lg" variant="dark" className="navbar-color">
                <Navbar.Brand href="/"><img
        src={icone}
        height="40"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/regras">Regras</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>



        )
    }

export default navbar