import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';


function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <a className="navbar-brand fw-bold" href="/">
          <img className="header-image" src="./icon.png" alt="icon" />
          Wild Garden
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Plan Your Garden" id="navbarScrollingDropdown">
              <NavDropdown.Item href={"/layout"}>Layout</NavDropdown.Item>
              <NavDropdown.Item href="/plantSpecs">
                Plants
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/location">
                Location
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;