import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CardFormRegister from "../components/CardFormRegister";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={8}>
            <CardFormRegister />

            <Row className="mt-5 justify-content-center">
              <Col lg={6}>
                <Button
                  onClick={handleLogin}
                  variant="primary"
                  className="px-1 my-2 me-2 full-width"
                >
                  Login
                </Button>
              </Col>
              <Col lg={6}>
                <Button
                  onClick={handleRegister}
                  variant="link"
                  className="px-1 my-2 me-2 full-width"
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
