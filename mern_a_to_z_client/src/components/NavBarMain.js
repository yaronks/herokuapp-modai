
import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBarMain() {

return (<Navbar bg="light" fixed='top'>
<Container>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Nav className="me-auto" style={{padding:'5px', fontSize:20}}>
    <Nav.Link className="w3-small" href="/my-closet">My Closet</Nav.Link>
    <Nav.Link href="/suggestions">Outfit Ideas</Nav.Link>
    <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/initial-survey">Preferences</NavDropdown.Item>
              <NavDropdown.Item href="/upload-item"> Upload Closet Items </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Personal Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
  </Container>
</Navbar>)


}

export default NavBarMain;