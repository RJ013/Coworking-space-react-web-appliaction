import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_2.png';
import './css/NavBar.css'; // Import the CSS file for NavBar styling

function NavBar({ auth, handleLogout }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav" data-bs-theme="dark" sticky="top">
      <Container>
      <Link to="/"> <img src={logo} alt="Logo" height="60" width="60" className='logo-img'/></Link>
         
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {auth ? (
              <>
                <Link to="/admin" className="nav-link">Form</Link>
                <Link to="/blog1" className="nav-link">Add Blog</Link>
              </>
            ) : (
              <>
              <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/startups" className="nav-link">Startups</Link>
                <Link to="/fablabs" className="nav-link">Fablabs</Link>
                <Link to="/coworking-space" className="nav-link">Coworking Space</Link>
                <Link to="/amenities" className="nav-link">Amenities</Link>
                <Link to="/blog" className="nav-link">Blogs</Link>
                <Link to="/contact" className="nav-link">Contacts</Link>
              </>
            )}
          </Nav>
          <Nav>
            {auth ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Link to="/coworking-space" className="nav-link">Join Us</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
