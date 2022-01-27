import React from 'react';
import {
    Nav,
    Navbar,    
    Container,    
} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./Home"
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
export default function NavBarComp() {

    return (
        
        <BrowserRouter>
            <div>                
                 <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>Ferdinand's Portfolio'</Navbar.Brand> 
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link}
                                    to={"/"}>Home</Nav.Link>
                                <Nav.Link as={Link}
                                    to={"/about"}>About Me</Nav.Link>
                                <Nav.Link as={Link}
                                    to={"/projects"}>My Projects</Nav.Link>
                                <Nav.Link as={Link}
                                    to={"/contact"}>Contact me</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </div>
            <div>
                <Routes>
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/" element={<Home />} />

                </Routes>
            </div> 
            </BrowserRouter>

    )

}
