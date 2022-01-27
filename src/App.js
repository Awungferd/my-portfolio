import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import {Nav, Navbar, Container} from 'react-bootstrap';


function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar defaultActiveKey="/home" collapseOnSelect expand="lg" bg="secondary" variant="dark">
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
                    <Route path="about"
                        element={<About/>}/>
                    <Route path="projects"
                        element={<Projects/>}/>
                    <Route path="contact"
                        element={<Contact/>}/>
                    <Route path="/"
                        element={<Home/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
