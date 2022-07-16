import { Container, Row, Col, Image, Button, Alert } from "react-bootstrap";
import CardFormRegister from "../components/CardFormRegister";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../helpers/";
import { useMutation } from "react-query";
import { API } from "../config/api";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const { full_name, email, password } = form;

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
      const response = await API.post("/register", body, config);

      // Handling response here
      console.log(response.data);
      const alert = toast.success("Thank you for joining. Please login!");
      setMessage(alert);
    } catch (error) {
      const alert = toast.error(error);
      setMessage(alert);
      console.log(error);
    }
  });
  return (
    <>
      <Container className="mt-5">
        <Toaster />
        <Row className="justify-content-center">
          <Col xs={8}>
            <CardFormRegister
              name={full_name}
              email={email}
              password={password}
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

export default Register;
