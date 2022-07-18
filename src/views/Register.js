import { Container, Row, Col, Button } from "react-bootstrap";
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

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);
      console.log(response.data);

      if (response.data.status == "failed") {
        const alert = toast.error(response.data.message);
        setMessage(alert);
      } else {
        const alert = toast.success("Thank you for joining. Please login!");
        setMessage(alert);
        navigate("/login");
      }
    } catch (error) {
      const alert = toast.error(error.response.data.error.message);
      setMessage(alert);
      console.log(error.response.data.error.message);
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
                  variant="link"
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
