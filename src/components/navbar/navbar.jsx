import React from 'react'
import './navbar.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import icone from '../../assets/imgs/icons/icon.png'

const navbar = (props) => {
        
        return (
            <Navbar expand="lg" variant="dark" className="navbar-color">
                <Link to="/" className="nav-brand"><img
        src={icone}
        height="40"
        alt="React Bootstrap logo"
      /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/regras" className="nav-link">Regras</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>



        )
    }

export default navbar