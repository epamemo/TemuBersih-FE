import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { UserContext } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  console.log(state);

  const toggleLogout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/register");
  };

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
          {state.isLogin ? (
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/profile/">
                Hai, {state.user.full_name}!
              </Nav.Link>
              <Nav.Link onClick={toggleLogout}>Keluar</Nav.Link>
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
