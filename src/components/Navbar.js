import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logoDumbmerch from "../Images/logo-dumbmerch.png";
import { UserContext } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
  const { isAdmin, isLogin, toggleLogout } = useContext(UserContext);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2 className="title-web">TemuBersih</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {isLogin ? (
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/profile/1">
                Profile
              </Nav.Link>
              <Nav.Link onClick={toggleLogout}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/register">
                Gabung
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
