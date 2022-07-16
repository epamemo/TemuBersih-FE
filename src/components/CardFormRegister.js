import { Button, Card, Form } from "react-bootstrap";
import InputMolecules from "../molecules/InputMolecules";

function CardFormRegister(props) {
  return (
    <>
      <Card className="p-3 m-auto w-100">
        <Card.Body>
          <h3>Register</h3>
          <Form onSubmit={props.onsubmit}>
            <InputMolecules
              type="Text"
              placeholder="Full Name"
              className="my-3"
              value={props.name}
              name="name"
              onchange={props.onchange}
            />
            <InputMolecules
              type="Email"
              placeholder="Email Address"
              className="my-3"
              value={props.email}
              name="email"
              onchange={props.onchange}
            />
            <InputMolecules
              type="Password"
              placeholder="Password"
              className="my-3"
              value={props.password}
              name="password"
              onchange={props.onchange}
            />
            <Button type="submit" className="full-width">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardFormRegister;
