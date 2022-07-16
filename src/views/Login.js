import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import CardFormLogin from "../components/CardFormLogin";
import { useMutation } from "react-query";
import { useContext, useState } from "react";
import { UserContext } from "../helpers";
import { API } from "../config/api";

function Login() {
  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body => Convert Object to String
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/login", body, config);

      // Handling response here
      const userStatus = response.data.data.status;

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
      });

      if (userStatus == "customer") {
        navigate("/");
      } else if (userStatus == "admin") {
        navigate("/complain-admin");
      }

      setMessage(null);
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          {error.response.data.message}
        </Alert>
      );
      setMessage(alert);
      console.log(error.response.data.message);
    }
  });

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={8}>
            {message && message}
            <CardFormLogin
              onchange={handleChange}
              onsubmit={(e) => handleSubmit.mutate(e)}
            />

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

export default Login;
